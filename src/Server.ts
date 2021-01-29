'use strict'

/** Basic */
import express, { Request, Response, NextFunction, Express } from 'express'
import path from 'path'
import { baseLogger } from '@/shared/Logger'
import { expressMiddleware } from 'cls-rtracer'

/** Security */
import cors from 'cors'
import helmet from 'helmet'

/** API & Routes */
import { registerRootEndpoints } from '@/routes'

const logger = baseLogger.child({ component: path.basename(__filename) })
const corsEnabledLocation = process.env.CORS_ENABLED_LOCATION

/* **********************************************************************************
 *                              Setup & configure app
 ********************************************************************************** */

/** Install express app */
const app: Express = express()

/** Security */
if (corsEnabledLocation !== undefined) {
    app.use(cors({ origin: corsEnabledLocation }))
}

app.use(helmet({
    contentSecurityPolicy: false
}))

app.use(expressMiddleware())

/** Route mask for logging of any incoming request */
app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info('Incoming request')
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