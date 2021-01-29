'use strict'

import app from './Server'
import { PORT, APP_NAME } from './env'

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening to http://localhost:${PORT}`)
})