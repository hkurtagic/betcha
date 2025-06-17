import request from 'supertest'
import { app } from '../app'
import { User } from '../model/models'
import { io, Socket } from 'socket.io-client'
import {
    ClientToServerEvents,
    ServerToClientEvents,
} from '../SocketConnectionTypes'
import { prisma, resetTables } from '../main'

describe('Main', () => {
    let USER: User = {
        user_id: '',
        name: '',
        groupPin: '',
    }
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
        'http://localhost:3000'
    )
    socket.connect()

    beforeEach(async () => {
        await resetTables()
        // You might also want to re-seed initial data here if necessary
    })

    // Use an afterAll hook to disconnect Prisma client after all tests in this suite are done
    afterAll(async () => {
        await prisma.$disconnect()
        socket.disconnect()
    })

    it('Get ping response from backend', async () => {
        const expectRes = {
            message: 'pong',
        }
        const res = await request(app).get('/ping')

        expect(res.status).toBe(200)
        expect(res.body).toStrictEqual(expectRes)
    }),
        it('Get random name', async () => {
            const res = await request(app).get('/randomName')

            expect(res.status).toBe(200)
            expect(typeof res.body).toStrictEqual('string')

            USER.name = res.body
        })
    it('Create user without group', async () => {
        const res = await request(app).post('/newUser').send({
            // <--- Use .send() to send the request body
            user_name: USER.name,
        })

        expect(res.body.user_id).toBeDefined()
        expect(res.body.name).toBe(USER.name)
        expect(res.body.groupPin).toBeDefined()

        USER.user_id = res.body.user_id
        USER.groupPin = res.body.groupPin
    })

    it('Join group via socket', async () => {
        socket.emit('requestJoinGroup', USER.user_id, USER.groupPin)

        socket.on('responseJoinGroup', (msg) => {})
    })
})
