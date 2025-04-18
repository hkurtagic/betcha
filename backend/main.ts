import { Namespace, Server } from 'socket.io'
import { randomInt, randomUUID } from 'crypto'
import {
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData,
} from './SocketConnectionTypes'
import { Config, uniqueUsernameGenerator } from 'unique-username-generator'
import { customLog, logLevel } from './winston'
/**
 * @description generates a random Username with uniform settings
 */
function generateUsername(): string {
    return uniqueUsernameGenerator({
        separator: '',
        randomDigits: 3,
        style: 'capital',
    } as Config)
}
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

const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(3000, {
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
        // send a random username to client on connection
        socket.emit('sendRandomName', generateUsername())
        // send new random username to client if requested
        socket.on('requestRandomName', () => {
            socket.emit('sendRandomName', generateUsername())
        })
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
