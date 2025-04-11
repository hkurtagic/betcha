import { UUID } from 'crypto'

/**
 * @description Client emit | Server listen events
 */
interface ClientToServerEvents {
    requestRandomName: () => void
    requestCreateGroup: (name: string) => void
    requestJoinGroup: (name: string, groupPIN: string) => void
}
/**
 * @description Server emit | Client listen events
 */
interface ServerToClientEvents {
    sendRandomName: (name: string) => void
    confirmCreateJoinGroup: (name: string, uid: UUID) => void
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
