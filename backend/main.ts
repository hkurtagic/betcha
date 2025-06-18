import { Namespace, Server, ServerOptions } from 'socket.io'
import 'dotenv/config'
//@ts-ignore
import parser from 'socket.io-json-parser'
import { randomInt, randomUUID } from 'crypto'
import {
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData,
} from './SocketConnectionTypes'
import { customLog, logLevel, service } from './winston'
import { PrismaClient } from './prisma/database'
import { createServer } from 'http'
import { app, PORT } from './app'
import { databaseController as dbController } from './database/dbController'
import HttpStatusCode from './HTTPStatusCodes'

export const prisma = new PrismaClient()
/**
 * @description generates a random new PIN
 */
function generatePIN(pinLength: number = 8): string {
    let pin = ''
    let pinIsNew = false
    while (!pinIsNew) {
        for (let index = 0; index < pinLength; index++) {
            pin += randomInt(0, 10)
        }
        // TODO: check if PIN already exists
    }
    return pin
}
/**
 * @description drop all table content
 */
async function resetTables() {
    try {
        await prisma.betStake.deleteMany({})
        await prisma.userToken.deleteMany({})
        await prisma.choice.deleteMany({})
        await prisma.bet.deleteMany({})
        await prisma.user.deleteMany({})
        await prisma.group.deleteMany({})
        customLog(logLevel.warn, service.database, 'All tables wiped (see .env)')
    } catch (error) {
        customLog(
            logLevel.error,
            service.database,
            `Error resetting database tables: ${error}`
        )
        throw error
    }
}
/**
 *
 * @param user_id
 * @param user_name
 * @returns Promise<boolean | Error>
 *
 * @description Check if user exists in database. Returns true if exists
 */
async function checkIfUserExists(
    user_id?: string,
    user_name?: string
): Promise<boolean | Error> {
    if (!user_id && !user_name) return new Error('No username or userid provided')
    try {
        if (user_id) {
            return (await dbController.getUserByID(user_id)) !== null ? true : false
        } else if (user_name) {
            return (await dbController.getUserByName(user_name)) !== null ? true : false
        } else {
            return new Error(
                'Unexpected condition: Neither user_id nor user_name was processed'
            )
        }
    } catch (error) {
        if (error instanceof Error) return error
        return new Error('An unknown error occurred while checking user existence')
    }
}

const httpServer = createServer(app)

httpServer.listen(PORT, () => {
    customLog(logLevel.info, 'httpServer', `Listen on http://${process.env.IP}:${PORT}`)
})

async function main() {
    process.env.DROP_TABLE === 'true' && process.env.NODE_ENV === undefined
        ? resetTables()
        : null
    // let g = (await db.createGroup()) as Group
    // customLog(logLevel.info, 'Group creation', JSON.stringify(g))

    // Socket
    const io = new Server<
        ClientToServerEvents,
        ServerToClientEvents,
        InterServerEvents,
        SocketData
    >(httpServer, {
        // parser: parser,
        connectionStateRecovery: undefined,
        // connectionStateRecovery: {
        //     // the backup duration of the sessions and the packets (in milliseconds)
        //     maxDisconnectionDuration: 10 * 60 * 1000,
        //     // whether to skip middlewares upon successful recovery
        //     skipMiddlewares: true,
        // },
    })
    // customLog(logLevel.info, 'SocketIO', `Listen on ${io.httpServer.address()}`)
    // connection errors
    io.engine.on('connection_error', (err) => {
        console.log(err.req) // the request object
        console.log(err.code) // the error code, for example 1
        console.log(err.message) // the error message, for example "Session ID unknown"
        console.log(err.context) // some additional error context
    })

    io.on('connection', (socket) => {
        socket.onAnyOutgoing((event, ...args) => {
            customLog(
                logLevel.debug,
                service.websocket,
                `Outgoing Socket data: ${event} \n ${args}`
            )
        })
        socket.onAny((event, ...args) => {
            console.log('Received event:', event)
        })
        if (socket.recovered) {
            // recovery was successful: socket.id, socket.rooms and socket.data were restored
            customLog(
                logLevel.debug,
                'Socket recovery',
                `Socket ${socket.id} recovered successfully`
            )
        } else {
            // let user join group OR create group if not already exist
            socket.on('requestJoinGroup', async (data, callback) => {
                try {
                    const [user_id, group_pin] = Object.values(
                        JSON.parse(data)
                    ) as string[]
                    if (user_id === undefined || group_pin === undefined) {
                        callback({
                            status: HttpStatusCode.BAD_REQUEST,
                            msg: JSON.stringify('user_id and group_pin needed'),
                        })

                        return
                    }

                    customLog(
                        logLevel.debug,
                        'requestJoinGroup',
                        `Socket data: ${user_id} ${group_pin} from ${data}`
                    )
                    const checkUserId = await dbController.getUserByID(user_id)
                    const checkGroupPin = await dbController.getGroupByPIN(group_pin)
                    const errors = new Map()

                    if (checkGroupPin == null)
                        errors.set('emptyGroupPin', 'No group pin passed')
                    if (checkUserId == null)
                        errors.set('emptyUserId', 'No user id passed')
                    // if (checkUserId != null && checkUserId.name != null)
                    //     errors.set('userIdIsEqual', 'User ids are not equal')

                    if (errors.size === 0) {
                        socket.join(group_pin)
                        callback({ status: HttpStatusCode.OK })
                        return
                    } else {
                        const msg: Error = {
                            name: '',
                            message: '',
                        }

                        errors.forEach(
                            (value, key) => (msg.name = `${msg.name}, ${key}`)
                        )
                        errors.forEach(
                            (value, key) => (msg.message = `${msg.message}, ${value}`)
                        )
                        msg.name.substring(2)
                        msg.message.substring(2)
                        callback({
                            status: HttpStatusCode.BAD_REQUEST,
                            msg: JSON.stringify(msg),
                        })
                        return
                    }
                } catch (error) {
                    customLog(logLevel.error, service.websocket, `${error}`)
                }
            })

            socket.on('requestCreateBet', async (data, callback) => {
                try {
                    const [user_id, bet_name, bet_choice] = Object.values(
                        JSON.parse(data)
                    ) as string[]

                    if (!user_id || !bet_name || !bet_choice) {
                        callback({
                            status: HttpStatusCode.BAD_REQUEST,
                            msg: 'user_id, bet_name or bet_choice not provided',
                        })
                        return
                    }
                    if (await checkIfUserExists(user_id)) {
                        callback({
                            status: HttpStatusCode.BAD_REQUEST,
                            msg: 'user_id does not exist',
                        })
                        return
                    }

                    const bet = await dbController.createBet(
                        bet_name,
                        user_id,
                        bet_choice as unknown as string[]
                    )
                    console.log(bet)
                    if (bet) {
                        customLog(logLevel.debug, service.websocket, `${bet}`)
                        callback({ status: HttpStatusCode.OK })
                        let group_pin = (await dbController.getUserByID(user_id))
                            ?.groupPin!
                        let bets = await dbController.getBetsInGroup(group_pin)
                        bets.map((b) => delete b.openedBy)
                        customLog(
                            logLevel.debug,
                            service.websocket,
                            `${JSON.stringify(bets)}`
                        )
                        io.to(group_pin).emit('BetUpdate', JSON.stringify(bets))
                        return
                    }
                } catch (error) {
                    customLog(logLevel.error, service.websocket, `${error}`)
                }
            })
        }
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

// const roomID = randomUUID()

// // use middleware in namespace "/"
// io.of('/join').use((socket, next) => {
//     //"localhost:3000/join/roomID"
//     next()
// })

//  io.on('connection', (socket) => {
//     socket.on('newUser', (name, roomID?) => {
//         console.log(`room id from newUser event: ${roomID}`)
//         roomID = roomID ? roomID : randomUUID()
//         socket.join(roomID)
//         const userID = randomUUID()
//         // save roomUUID to userUUID & username correlation
//         socket.emit('newUserAck', userID, roomID)
//     })
//     // socket.join(roomID)
//     // io.to(roomID).emit('hello')
//     socket.on('disconnect', (reason) => {
//         console.log(`socket ${socket.id} disconnected due to ${reason}`)
//     })
// })

// // underlying adapter edits, to log room events
// io.of('/').adapter.on('create-room', (room) => {
//     console.log(`room ${room} was created`)
// })
// io.of('/').adapter.on('delete-room', (room) => {
//     console.log(`room ${room} was deleted`)
// })
// io.of('/').adapter.on('join-room', (room, id) => {
//     console.log(`socket ${id} has joined room ${room}`)
// })
// io.of('/').adapter.on('leave-room', (room, id) => {
//     console.log(`socket ${id} has left room ${room}`)
// })

// // close socket on
// io.on('end', function () {
//     io.close()
// })
export { resetTables, httpServer }
