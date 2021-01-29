'use strict'

import path from 'path'
import app from '@/Server'
import { baseLogger } from '@/shared/Logger'

const logger = baseLogger.child({ component: path.basename(__filename) })
const { PORT, APP_NAME } = process.env

app.listen(PORT, () => {
  logger.info(`${APP_NAME} listening to http://localhost:${PORT}`)
})