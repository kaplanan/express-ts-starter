'use strict'

import app from './Server'
import { PORT } from './env'

app.listen(PORT, () => {
  console.log(`Express-ts-starter listening to http://localhost:${PORT}`)
})