import bookshelf from 'bookshelf'
import knex from 'knex'
import knexEnvs from './knexfile'

const environment = process.env.ENVIRONMENT || 'development'
const config = knexEnvs[environment]

// knex connection to database
const knexInstance = knex(config)

// db exported instance
const db = bookshelf(knexInstance)
db.plugin('registry')
db.plugin('visibility')

export default db
