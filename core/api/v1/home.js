import express from 'express'

const homeRoutes = express.Router()

homeRoutes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Union',
    version: '1.0',
  })
})

export default homeRoutes
