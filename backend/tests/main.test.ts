import request from 'supertest'
import { app } from '../app'
import { User } from '../model/models'

/*
 [] Create user without group
 [] Create user with group
 [] 
*/

describe('Main', () => {
    let USER: User = {
        user_id: '',
        name: '',
        groupPin: '',
    }

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
        const res = (await request(app).post('/newUser')).body({
            user_name: USER.name,
        })
    })
    it('Create user with group', async () => {})
})
