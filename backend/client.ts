import { io, Socket } from 'socket.io-client'
import {
    ClientToServerEvents,
    ServerToClientEvents,
} from './SocketConnectionTypes'
import { customLog, logLevel, service } from './winston'

let roomID = ''
let myToken = ''

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    'http://localhost:8000'
    // { query: { myToken } }
)
socket.connect()
socket.emit(
    'requestJoinGroup',
    JSON.stringify({ user_id: 'asdfasdf' }),
    (res) => {
        customLog(logLevel.info, service.websocket, `${res.status} ${res.msg}`)
    }
)
// socket.emit('newUser', 'testName1')

// socket.on('newUserAck', (userid, roomid) => {
//     roomID = roomid
//     console.log(`socket: u hav id ${userid}`)
// })

// function a() {
//     const socket2: Socket<ServerToClientEvents, ClientToServerEvents> = io(
//         'http://localhost:3000',
//         { multiplex: false }
//     )
//     socket2.connect()
//     socket2.emit('newUser', 'testName2', roomID)
//     socket2.on('newUserAck', (userid) => {
//         console.log(`socket2: u hav id ${userid}`)
//         socket.close()
//         socket2.close()
//     })
// }
// setTimeout(a, 10000)

// connection errors
socket.on('connect_error', (err) => {
    // the reason of the error, for example "xhr poll error"
    console.log(err.message)
})
socket.on('disconnect', (reason) => {
    if (socket.active) {
        // temporary disconnection, the socket will automatically try to reconnect
    } else {
        // the connection was forcefully closed by the server or the client itself
        // in that case, `socket.connect()` must be manually called in order to reconnect
        console.log(reason)
    }
})
socket.io.on('reconnect_attempt', () => {
    // ...
})

socket.io.on('reconnect', () => {
    // ...
})
