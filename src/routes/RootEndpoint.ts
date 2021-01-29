'use strict'
import express, { Router, Request, Response, NextFunction } from 'express'

class ContentEndpoint {

    public router: Router

    constructor () {
      this.router = express.Router()
  
      /** GET mapping for basic route */
      this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
        try {
            res.send('Starter on air!')
        } catch (error) {
          next(error)
        }
      })
  }
}

export default ContentEndpoint