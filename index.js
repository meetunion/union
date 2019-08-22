import dotenv from 'dotenv'
import log from './core/utils/logger'
import union from './core'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

log('Starting Union')
union()
