'use strict'

import path from 'path'
import app from '@/Server'
import { PORT, APP_NAME } from '@/env'
import { baseLogger } from '@/shared/Logger'

const logger = baseLogger.child({ component: path.basename(__filename) })


app.listen(PORT, () => {
  logger.info(`${APP_NAME} listening to http://localhost:${PORT}`)
})