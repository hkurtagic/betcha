import { io, Socket } from 'socket.io-client'

const socket: Socket = io('http://localhost:3000')
socket.connect()

socket.on('hello', () => {
    console.log('connection works')
    socket.emit('end')
})
