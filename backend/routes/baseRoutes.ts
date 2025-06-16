import { NextFunction, RequestHandler, Router } from 'express'
import {
    adjectives,
    animals,
    colors,
    Config,
    languages,
    names,
    uniqueNamesGenerator,
} from 'unique-names-generator'
import { customLog, logLevel, service } from '../winston'
import { User } from '../model/models'
import { databaseController as dbController } from '../database/dbController'
import { Context } from 'node:vm'

/**
 * @description generates a random Username with uniform settings
 */
function generateUsername(): string {
    return uniqueNamesGenerator({
        separator: '',
        randomDigits: 3,
        style: 'capital',
        dictionaries: [adjectives, languages, animals],
    } as Config)
}

const router = Router()

router.get('/ping', (_, res) => {
    res.json({ message: 'pong' })
})

router.get('/randomName', (_, res) => {
    const name = generateUsername()
    customLog(logLevel.debug, service.httpServer, name)
    res.json(name)
})

router.get('/user/:userId', async (req, res) => {
    const user_id = req.params.userId
    const user = await dbController
        .getUserByID(user_id)
        .then((u: User | null) => u)
        .catch((err) => {
            throw new Error(err)
        })
    if (!user) {
        res.status(400).json({ message: 'User could not be found' })
    }
    customLog(logLevel.debug, service.httpServer, user_id)
    res.json(user)
})

router.post('/newUser', async (req, res) => {
    const user_name: string = req.body.user_name
        ? req.body.user_name
        : res.status(400).json({ message: 'No user_name provided' })
    let group_pin: string
    const g = req.body.group_pin
        ? await dbController.getGroupByPIN(req.body.group_pin)
        : null
    if (g) {
        group_pin = req.body.group_pin
    } else {
        group_pin = (await dbController.createGroup()).pin
    }

    await dbController
        .getUserByName(user_name)
        .then(async (data) => {
            if (data != null) {
                res.status(400).json({ message: 'User already in use' })
            } else {
                return await dbController
                    .createUser(user_name, group_pin)
                    .then((u: User) => {
                        res.json(u)
                    })
                    .catch((err) => {
                        throw new Error(err)
                    })
            }
        })
        .catch((err) => {
            throw new Error(err)
        })
})

router.patch('/updateUser', async (req, res) => {
    const user_name: string = req.body.user_name
    const user_id: string = req.body.user_id
    const group_pin: string = req.body.group_pin
    if (!user_id) res.status(400).json({ message: 'No user_id provided' })
    else if (!user_name && !group_pin)
        res.status(400).json({ message: 'No user_name or group_pin provided' })
    else {
        const checkUserId = await dbController
            .getUserByID(user_id)
            .then(async (data) => data)
            .catch((err) => {
                throw new Error(err)
            })

        let user: User
        if (!checkUserId) {
            res.status(400).json({ message: 'User could not be found' })
        } else {
            if (user_name) {
                let checkUserName = await dbController
                    .getUserByName(user_name)
                    .then((data) => data)
                    .catch((err) => {
                        throw new Error(err)
                    })

                if (checkUserName) {
                    res.status(400).json({ message: 'Username already in use' })
                } else {
                    await dbController
                        .updateUsernameByID(user_id, user_name)
                        .then((u: User) => (user = u))
                        .catch((err) => {
                            throw new Error(err)
                        })
                }
            }

            if (group_pin) {
                let checkGroupPIN = await dbController
                    .getGroupByPIN(group_pin)
                    .then((data) => data)
                    .catch((err) => {
                        throw new Error(err)
                    })

                if (!checkGroupPIN) {
                    res.status(400).json({
                        message: 'Group could not be found',
                    })
                } else {
                    await dbController
                        .updateUserGroupPinByID(user_id, group_pin)
                        .then((u: User) => res.json(u))
                        .catch((err) => {
                            throw new Error(err)
                        })
                }
            }
        }
    }
})

router.delete('/deleteUser', async (req, res) => {
    const user_id: string = req.body.user_id
    if (!user_id) res.status(400).json({ message: 'No user_id provided' })
    else {
        const checkUserId = await dbController
            .getUserByID(user_id)
            .then(async (data) => data)
            .catch((err) => {
                throw new Error(err)
            })

        if (!checkUserId) {
            res.status(400).json({ message: 'User could not be found' })
        } else {
            await dbController
                .deleteUserByID(user_id)
                .then((u: User) => res.json(u))
                .catch((err) => {
                    throw new Error(err)
                })
        }
    }
})

export default router
