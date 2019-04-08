const express = require('express');
const tokenAuth = require('../../auth/token');

const Payment = require('../../models/payment');

const paymentsRoutes = express.Router();

paymentsRoutes.get('/', tokenAuth, (req, res) => {
  Payment.fetchAll().then((payments) => {
    res.json(payments.toJSON());
  });
});

module.exports = paymentsRoutes;
