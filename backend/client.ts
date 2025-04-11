import { io, Socket } from 'socket.io-client'
import { ClientToServerEvents, ServerToClientEvents } from './SocketConnectionTypes'

var roomID = ''

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    'http://localhost:3000'
)
socket.connect()
socket.emit('newUser', 'testName1')

socket.on('newUserAck', (userid, roomid) => {
    roomID = roomid
    console.log(`socket: u hav id ${userid}`)
})

function a() {
    const socket2: Socket<ServerToClientEvents, ClientToServerEvents> = io(
        'http://localhost:3000',
        { multiplex: false }
    )
    socket2.connect()
    socket2.emit('newUser', 'testName2', roomID)
    socket2.on('newUserAck', (userid) => {
        console.log(`socket2: u hav id ${userid}`)
        socket.close()
        socket2.close()
    })
}
setTimeout(a, 10000)
