const express = require('express');

const homeRoutes = express.Router();

homeRoutes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Union',
    version: '0.1',
  });
});

module.exports = homeRoutes;
