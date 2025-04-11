import { ExtendedError, Socket } from 'socket.io'
import {
    ClientToServerEvents,
    InterServerEvents,
    ServerToClientEvents,
    SocketData,
} from '../SocketConnectionTypes'
import jwt from 'jsonwebtoken'

const JwtVerify = (
    socket: Socket<
        ClientToServerEvents,
        ServerToClientEvents,
        InterServerEvents,
        SocketData
    >,
    next: (err?: ExtendedError) => void
): void => {
    const query = socket.handshake.query
    const token = socket.handshake.auth.token as string | undefined
    if (query && token) {
        jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
            if (err) return next(new Error('Authentication error'))
            socket.decoded = decoded
            next()
        })
    } else {
        next(new Error('Authentication error'))
    }
}
