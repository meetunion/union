const express = require('express');
const tokenAuth = require('../../auth/token');

const Payment = require('../../models/payment');

const paymentsRoutes = express.Router();

paymentsRoutes.get('/', tokenAuth, (req, res) => {
  Payment.fetchAll().then((payments) => {
    res.json(payments.toJSON());
  });
});

paymentsRoutes.get('/:id', tokenAuth, (req, res) => {
  Payment.forge({ id: req.params.id })
    .fetch()
    .then((payment) => {
      res.json(payment.toJSON());
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = paymentsRoutes;
