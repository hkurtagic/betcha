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

    res.json({message: 'pong'})
})

router.get('/randomName', (_, res) => {
    const name = generateUsername()
    customLog(logLevel.debug, service.httpServer, name)
    res.json(name)
})

router.post('/newUser', async (req, res, next) => {
    console.log(req.body)
    const user_name: string = req.body.user_name ? req.body.user_name : res.status(400).json({message: 'No user_name provided'})
    let group_pin: string
    const g = req.body.group_pin ? await dbController.getGroupByPIN(req.body.group_pin) : null
    if (g) {
        group_pin = req.body.group_pin
    } else {
        group_pin = (await dbController.createGroup()).pin
    }

    await dbController.getUserByName(user_name)
    .then(async (data) => {
        if (data != null) {
            res.status(400).json({message: 'User already in use'})
        } else {
            return await dbController.createUser(user_name, group_pin)
            .then((u: User) => {
                res.json(u)
            })
            .catch(err => {throw new Error(err)})
        }
    }).
    catch(err => next(err))
})

export default router
