'use strict'
import express, { Router, Request, Response, NextFunction } from 'express'
import path from 'path'
import { baseLogger } from '@/shared/Logger'

const logger = baseLogger.child({ component: path.basename(__filename) })

class RootEndpoint {

    public router: Router

    constructor () {
      this.router = express.Router()
  
      /** GET mapping for basic route */
      this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
        try {
          res.send('Starter on air!')
        } catch (error) {
          logger.error(error)
          next(error)
        }
      })
  }
}

export default RootEndpoint