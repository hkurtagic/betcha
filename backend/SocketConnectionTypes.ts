interface ClientToServerEvents {
    newUser: (name: string, roomID?: string) => void
    basicEmit: (a: number, b: string, c: Buffer) => void
    withAck: (d: string, callback: (e: number) => void) => void
}
interface ServerToClientEvents {
    newUserAck: (userUUID: string, roomID: string) => void
}
export type { ClientToServerEvents, ServerToClientEvents }
