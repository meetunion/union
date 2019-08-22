import express from 'express'
import tokenAuth from '../../auth/token'
import User from '../../models/user'

const usersRoutes = express.Router()

usersRoutes.get('/', tokenAuth, (req, res) => {
  User.fetchAll().then((users) => {
    res.json(users)
  })
})

usersRoutes.get('/:id', tokenAuth, (req, res) => {
  User.forge({ id: req.params.id })
    .fetch()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

export default usersRoutes
