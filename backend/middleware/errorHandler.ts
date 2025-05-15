import { ErrorRequestHandler } from 'express'
import { customLog, logLevel, service } from '../winston'
import { ErrorResponse } from '../model/models'

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    customLog(logLevel.error, service.httpServer, err)

    const errRes: ErrorResponse = {
        error: true,
        status: 500,
        message: 'Some 💩 went wrong',
    }
    res.status(errRes.status).json(errRes)
}
