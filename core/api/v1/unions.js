const express = require('express');
const { Union } = require('../../models');

const unionsRoutes = express.Router();

unionsRoutes.get('/', (req, res) => {
  Union.fetchAll().then((unions) => {
    res.json(unions.toJSON());
  });
});

module.exports = unionsRoutes;
