import { RequestHandler, Router } from 'express'
import { Response } from '../model/models'
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
    const resMessage: Response = {
        error: false,
        status: 200,
        message: generateUsername(),
    }

    res.json(resMessage)
})

router.get('/randomName', (_, res) => {
    const name = generateUsername()
    customLog(logLevel.debug, service.httpServer, name)
    const resMessage: Response = {
        error: false,
        status: 200,
        message: name,
    }

    res.json(resMessage)
})

export default router
