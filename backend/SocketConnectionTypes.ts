import { UUID } from 'crypto'

/**
 * @description Client emit | Server listen events
 */
interface ClientToServerEvents {
    requestJoinGroup: (user_id: string, group_pin: string) => void
}
/**
 * @description Server emit | Client listen events
 */
interface ServerToClientEvents {
    responseJoinGroup: (message: string | Error) => void
}
/**
 * @description Server to Server events
 */
interface InterServerEvents {
    // ping: () => void
}
/**
 * @description Socket data, persistent through session
 */
interface SocketData {}

export type {
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData,
}
