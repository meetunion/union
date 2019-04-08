const express = require('express');
const tokenAuth = require('../../auth/token');

const User = require('../../models/user');

const usersRoutes = express.Router();

usersRoutes.get('/', tokenAuth, (req, res) => {
  User.fetchAll().then((users) => {
    res.json(users.toJSON());
  });
});

module.exports = usersRoutes;
