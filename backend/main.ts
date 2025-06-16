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
async function resetTabels() {
    await prisma.betStake.deleteMany({})
    await prisma.choice.deleteMany({})
    await prisma.bet.deleteMany({})
    await prisma.userToken.deleteMany({})
    await prisma.user.deleteMany({})
    await prisma.group.deleteMany({})

    customLog(logLevel.warn, service.database, 'All tables wiped (see .env)')
}

async function main() {
    process.env.DROP_TABLE === 'true' ? resetTabels() : null
    // let g = (await db.createGroup()) as Group
    // customLog(logLevel.info, 'Group creation', JSON.stringify(g))
    const httpServer = createServer(app)

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
        if (socket.recovered) {
            // recovery was successful: socket.id, socket.rooms and socket.data were restored
            customLog(
                logLevel.debug,
                'Socket recovery',
                `Socket ${socket.id} recovered successfully`
            )
        } else {
            // let user join group OR create group if not already exist
            socket.on('requestJoinGroup', async (data) => {
                const [user_id, group_pin] = Object.values(JSON.parse(data)) as string[]
                const u = JSON.parse(data).user_id
                customLog(
                    logLevel.debug,
                    'requestJoinGroup',
                    `Socket data: ${user_id} ${group_pin} from ${data}`
                )
                const checkUserId = await dbController.getUserByID(user_id)
                const checkGroupPin = await dbController.getGroupByPIN(group_pin)
                const errors = new Map()

                if (checkGroupPin != null)
                    errors.set('emptyGroupPin', 'No group pin passed')
                if (checkUserId != null) errors.set('emptyUserId', 'No user id passed')
                if (checkUserId != null && checkUserId.name != null)
                    errors.set('userIdIsEqual', 'User ids are not equal')

                if (errors.size != 0) {
                    socket.join(group_pin)
                    socket.emit('responseJoinGroup', JSON.stringify(HttpStatusCode.OK))
                } else {
                    const msg: Error = {
                        name: '',
                        message: '',
                    }

                    errors.forEach((value, key) => (msg.name = `${msg.name}, ${key}`))
                    errors.forEach(
                        (value, key) => (msg.message = `${msg.message}, ${value}`)
                    )
                    msg.name.substring(2)
                    msg.message.substring(2)

                    socket.emit('responseJoinGroup', JSON.stringify(msg))
                }
            })
        }
    })

    httpServer.listen(PORT, () => {
        customLog(
            logLevel.info,
            'httpServer',
            `Listen on http://${process.env.IP}:${PORT}`
        )
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
