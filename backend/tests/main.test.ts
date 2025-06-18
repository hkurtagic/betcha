import request from 'supertest'
import { app } from '../app'
import { Bet, Choice, User } from '../model/models'
import { io, Socket } from 'socket.io-client'
import {
    ClientToServerEvents,
    ServerToClientEvents,
} from '../SocketConnectionTypes'
import { httpServer, prisma, resetTables } from '../main'
import HttpStatusCode from '../HTTPStatusCodes'
import { customLog, logLevel, service } from '../winston'

describe('Main', () => {
    let USER: User = {
        user_id: '',
        name: '',
        groupPin: '',
    }
    let CHOICE1 = {
        id: '',
        text: 'Team A',
        winningChoice: false,
        betStake: [],
    }
    let CHOICE2 = {
        id: '',
        text: 'Team B',
        winningChoice: false,
        betStake: [],
    }
    let BET = {
        id: '',
        name: 'Who will win the match?',
        isClosed: false,
        openedBy: USER,
        choices: [CHOICE1.text, CHOICE1.text],
    }

    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
        'http://localhost:3000'
    )

    /* ;async () => {
        await new Promise<void>((resolve) => {
            // Ensure socket is connected before tests run
            socket.once('connect', () => {
                customLog(
                    logLevel.info,
                    service.websocket,
                    'Socket connected for tests'
                )
                resolve()
            })
            socket.connect()
        })
    } */

    beforeAll(async () => {
        // await resetTables()
        socket.connect()
    })

    // Use an afterAll hook to disconnect Prisma client after all tests in this suite are done
    afterAll(async () => {
        // Disconnect Prisma client
        // await prisma.$disconnect()
        // customLog(logLevel.info, service.database, 'Prisma client disconnected')

        // Close the Socket.IO client connection
        socket.close()
        customLog(logLevel.info, service.websocket, 'Socket client closed')

        // Close the HTTP server
        await new Promise<void>((resolve, reject) => {
            httpServer.close((err) => {
                if (err) {
                    customLog(
                        logLevel.error,
                        service.httpServer,
                        `Error closing HTTP server: ${err}`
                    )
                    return reject(err)
                }
                customLog(
                    logLevel.info,
                    service.httpServer,
                    'HTTP server closed.'
                )
                resolve()
            })
        })
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

    it('Join group via socket', (done) => {
        const map = new Map()
        map.set('user_id', USER.user_id)
        map.set('group_pin', USER.groupPin)
        socket.emit('requestJoinGroup', JSON.stringify(map), (res) => {
            expect(res).toBe(HttpStatusCode.OK)
            done()
        })
    })

    it('Create bet via socket', (done) => {
        const map = new Map()
        map.set('user_id', USER.user_id)
        map.set('bet_name', BET.name)
        map.set('bet_choices', BET.choices)
        socket.emit('requestCreateBet', JSON.stringify(map), (res) => {
            expect(res).toBe(HttpStatusCode.OK)
            done()
        })
    })
})
