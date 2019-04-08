const express = require('express');
const passport = require('passport');

const unionsRoutes = express.Router();

unionsRoutes.get('/', passport.authenticate('bearer', { session: false }), (req, res) => {
  req.user.union().fetch().then((union) => {
    res.json(union.toJSON());
  });
});

module.exports = unionsRoutes;
