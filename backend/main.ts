import { Namespace, Server } from 'socket.io'
import { randomInt, randomUUID } from 'crypto'
import {
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData,
} from './SocketConnectionTypes'
import { customLog, logLevel } from './winston'
import { PrismaClient } from './prisma/database'
import { DatabaseController } from './database/dbController'
import express, { Express } from 'express'
import { createServer } from 'http'
import { morganMiddleware } from './middleware/morganMiddleware'
import { errorHandler } from './middleware/errorHandler'
import baseRoutes from './route/baseRoutes'

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
async function main() {
    // Database
    const db = new DatabaseController()
    // let g = (await db.createGroup()) as Group
    // customLog(logLevel.info, 'Group creation', JSON.stringify(g))

    // Webserver
    const PORT = process.env.PORT || 8080
    const app: Express = express()

    // Middleware
    app.use(morganMiddleware)

    // Routes
    app.use('/', baseRoutes)

    app.use(errorHandler) // MUST BE LAST MIDDLEWARE!!!
    const httpServer = createServer(app)

    // Socket
    const io = new Server<
        ClientToServerEvents,
        ServerToClientEvents,
        InterServerEvents,
        SocketData
    >(httpServer, {
        connectionStateRecovery: {
            // the backup duration of the sessions and the packets (in milliseconds)
            maxDisconnectionDuration: 10 * 60 * 1000,
            // whether to skip middlewares upon successful recovery
            skipMiddlewares: true,
        },
    })

    // connection errors
    io.engine.on('connection_error', (err) => {
        console.log(err.req) // the request object
        console.log(err.code) // the error code, for example 1
        console.log(err.message) // the error message, for example "Session ID unknown"
        console.log(err.context) // some additional error context
    })

    io.on('connection', (socket) => {
        if (socket.recovered) {
            // recovery was successful: socket.id, socket.rooms and socket.data were restored
            customLog(
                logLevel.debug,
                'Socket recovery',
                `Socket ${socket.id} recovered successfully`
            )
        } else {
            // let user join group OR create group if not already exist
            socket.on('requestCreateGroup', (username) => {
                let roomID = randomUUID()
            })
            socket.on('requestJoinGroup', (username, groupPIN) => {
                // TODO: lookup groupPIN in Database and get groupUUID
                if (groupPIN) {
                }
            })
        }
    })

    httpServer.listen(PORT, () => {
        customLog(
            logLevel.info,
            'httpServer',
            `Listen on http://127.0.0.1:${PORT}`
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
