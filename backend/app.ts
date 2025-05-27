import express, { Express } from 'express'
import { morganMiddleware } from './middleware/morganMiddleware'
import { errorHandler } from './middleware/errorHandler'
import baseRoutes from './routes/baseRoutes'

const app: Express = express()
    
// Webserver
export const PORT = process.env.PORT || 8080

// Middleware
app.use(morganMiddleware)
app.use(express.json())

// Routes
app.use('/', baseRoutes)

app.use(errorHandler) // MUST BE LAST MIDDLEWARE!!!

export {app}