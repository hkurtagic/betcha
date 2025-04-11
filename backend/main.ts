import { Namespace, Server } from 'socket.io'
import { UUID, randomUUID } from 'crypto'
import { ClientToServerEvents, ServerToClientEvents } from './SocketConnectionTypes'

const io = new Server<ClientToServerEvents, ServerToClientEvents>(3000, {
    // options
})
const roomID = randomUUID()

// use middleware in namespace "/"
io.of('/join').use((socket, next) => {
    //"localhost:3000/join/roomID"
    next()
})

io.on('connection', (socket) => {
    socket.on('newUser', (name, roomID?) => {
        console.log(`room id from newUser event: ${roomID}`)
        roomID = roomID ? roomID : randomUUID()
        socket.join(roomID)
        const userID = randomUUID()
        // save roomUUID to userUUID & username correlation
        socket.emit('newUserAck', userID, roomID)
    })
    // socket.join(roomID)
    // io.to(roomID).emit('hello')
    socket.on('disconnect', (reason) => {
        console.log(`socket ${socket.id} disconnected due to ${reason}`)
    })
})

// underlying adapter edits, to log room events
io.of('/').adapter.on('create-room', (room) => {
    console.log(`room ${room} was created`)
})
io.of('/').adapter.on('delete-room', (room) => {
    console.log(`room ${room} was deleted`)
})
io.of('/').adapter.on('join-room', (room, id) => {
    console.log(`socket ${id} has joined room ${room}`)
})
io.of('/').adapter.on('leave-room', (room, id) => {
    console.log(`socket ${id} has left room ${room}`)
})

// close socket on
io.on('end', function () {
    io.close()
})
