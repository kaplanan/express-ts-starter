'use strict'

import express, { Express, Router } from 'express'
import RootEndpoint from '@/routes/RootEndpoint'

export function registerRootEndpoints (app: Express): void {
    const router: Router = express.Router()
    app.use('/', new RootEndpoint().router)
}