const express = require('express');
const tokenAuth = require('../../auth/token');

const Union = require('../../models/union');

const unionsRoutes = express.Router();

// We're only dealing with a single Union right now so it should always
// be referring to the first instance.

// Get first union
unionsRoutes.get('/', tokenAuth, (req, res) => {
  Union.query({ orderBy: ['id', 'asc'] }).fetch().then((union) => {
    res.json(union.toJSON());
  });
});

module.exports = unionsRoutes;
