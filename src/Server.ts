'use strict'

import express, { Request, Response, NextFunction, Express } from 'express'
import cors from 'cors'
import { corsEnabledLocation } from './env'
import helmet from 'helmet'

import { registerRootEndpoints } from './routes'


/* **********************************************************************************
 *                              Setup & configure app
 ********************************************************************************** */

/** Install express app */
const app: Express = express()

/** Security */

/** Route mask for logging of any incoming request */
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Incoming request')
    next()
})

registerRootEndpoints(app)

/* **********************************************************************************
 *                                  Export App Server
 ********************************************************************************** */

export default app