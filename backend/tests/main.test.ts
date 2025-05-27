import request from 'supertest'
import { log } from 'console'
import { app } from '../app'

describe('Main', () => {
    it('Get ping response from backend', async () => {
        const expectRes = {
            message: 'pong'
        }
        const res = await request(app).get('/ping')

        expect(res.status).toBe(200)
        expect(res.body).toStrictEqual(expectRes)
    }),
    it('Get random name', async () => {
        const res = await request(app).get('/randomName')

        expect(res.status).toBe(200)
        expect(typeof res.body).toStrictEqual('string')
    })
    it('Create user without group', async () => {
        const res = (await request(app).post('/newUser')).body({})
    })
    it('Create user with group', async () => {})
})