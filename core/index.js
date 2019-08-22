import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import log from './utils/logger'
import api from './api'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use(api)

require('./auth')

function startUnion() {
  app.listen(process.env.PORT || port, () => log(`Listening on port ${port}`))
}

export default startUnion
