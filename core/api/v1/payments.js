import express from 'express'
import tokenAuth from '../../auth/token'
import Payment from '../../models/payment'

const paymentsRoutes = express.Router()

paymentsRoutes.get('/', tokenAuth, (req, res) => {
  Payment.fetchAll().then((payments) => {
    res.json(payments)
  })
})

paymentsRoutes.get('/:id', tokenAuth, (req, res) => {
  Payment.forge({ id: req.params.id })
    .fetch()
    .then((payment) => {
      res.json(payment)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

export default paymentsRoutes
