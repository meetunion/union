const express = require('express');

const homeRoutes = require('./home');
const authRoutes = require('./auth');
const unionsRoutes = require('./unions');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/unions', unionsRoutes);

module.exports = router;
