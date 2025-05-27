import { ErrorRequestHandler } from 'express'
import { customLog, logLevel, service } from '../winston'

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    customLog(logLevel.error, service.httpServer, err)

    const errRes = {
        message: 'Some 💩 went wrong',
    }
    res.status(500).json(errRes)
}
