'use strict'

import express, { Request, Response } from 'express'
const app = express()
const port = 8080

/** Entry point */
app.get('/', (req: Request, res: Response) => {
  res.send('Starter on air!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})