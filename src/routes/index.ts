'use strict'

import express, { Express, Router } from 'express'
import RootEndpoint from './RootEndpoint'

export function registerRootEndpoints (app: Express): void {
    const router: Router = express.Router()
    app.use('/', new RootEndpoint().router)
}