'use strict'

import * as RTracer from 'cls-rtracer'
import { format } from 'winston'

const tracerFormat = format((log) => {
    const trackingId = RTracer.id()
    if (trackingId) return { ...log, trackingId }
    return log
})

export default tracerFormat