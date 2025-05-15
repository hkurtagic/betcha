import { RequestHandler } from 'express'
import morgan from 'morgan'
import { customLog, logLevel } from '../winston'

export const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream: {
            write: (message) => {
                customLog(logLevel.http, 'httpServer', message.trim())
            },
        },
    }
)
