const express = require('express');
const passport = require('passport');

const { Union } = require('../../models');

const unionsRoutes = express.Router();

unionsRoutes.get('/', passport.authenticate('bearer', { session: false }), (req, res) => {
  Union.fetchAll().then((unions) => {
    res.json(unions.toJSON());
  });
});

module.exports = unionsRoutes;
