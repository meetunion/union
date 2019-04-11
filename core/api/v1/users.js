const express = require('express');
const tokenAuth = require('../../auth/token');

const User = require('../../models/user');

const usersRoutes = express.Router();

usersRoutes.get('/', tokenAuth, (req, res) => {
  User.fetchAll().then((users) => {
    res.json(users);
  });
});

usersRoutes.get('/:id', tokenAuth, (req, res) => {
  User.forge({ id: req.params.id })
    .fetch()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = usersRoutes;
