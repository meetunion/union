const express = require('express');

const homeRoutes = require('./home');
const unionsRoutes = require('./unions');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/unions', unionsRoutes);

module.exports = router;
