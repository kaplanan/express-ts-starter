'use strict'

/** Basic */
import express, { Request, Response, NextFunction, Express } from 'express'

/** Security */
import cors from 'cors'
import helmet from 'helmet'
import { CORS_ENABLED_LOCATION } from './env'

/** API & Routes */
import { registerRootEndpoints } from './routes'


/* **********************************************************************************
 *                              Setup & configure app
 ********************************************************************************** */

/** Install express app */
const app: Express = express()

/** Security */
if (CORS_ENABLED_LOCATION !== undefined) {
    app.use(cors({ origin: CORS_ENABLED_LOCATION }))
}

app.use(helmet({
    contentSecurityPolicy: false
  }))

/** Route mask for logging of any incoming request */
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Incoming request')
    next()
})

/* **********************************************************************************
 *                                     Endpoints
 ********************************************************************************** */

registerRootEndpoints(app)

/* **********************************************************************************
 *                                  Export App Server
 ********************************************************************************** */

export default app