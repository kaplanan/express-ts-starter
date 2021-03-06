'use strict'

import { createLogger, format, transports, Logger } from 'winston'
import { id } from 'cls-rtracer'

const tracerFormat = format((log) => {
    const trackingId = id()
    if (trackingId) return { ...log, trackingId }
    return log
})

export const baseLogger: Logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        tracerFormat(),
        format.json()
      ),
      defaultMeta: { service: process.env.APP_NAME },
      transports: [ new transports.Console() ]
})