const express = require('express');
const tokenAuth = require('../../auth/token');

const Tier = require('../../models/tier');

const tiersRoutes = express.Router();

tiersRoutes.get('/', tokenAuth, (req, res) => {
  Tier.fetchAll().then((tiers) => {
    res.json(tiers.toJSON());
  });
});

module.exports = tiersRoutes;
