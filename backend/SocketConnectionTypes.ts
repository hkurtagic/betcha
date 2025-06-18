import { UUID } from 'crypto'
import HttpStatusCode from './HTTPStatusCodes'

/**
 * @description Client emit | Server listen events
 */
interface ClientToServerEvents {
    requestJoinGroup: (
        data: string,
        callback: (msg: { status: HttpStatusCode; msg?: string }) => void
    ) => void
    requestCreateBet: (
        data: string,
        callback: (msg: { status: HttpStatusCode; msg?: string }) => void
    ) => void
}
/**
 * @description Server emit | Client listen events
 */
interface ServerToClientEvents {}
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
