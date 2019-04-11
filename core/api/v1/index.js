const express = require('express');

const homeRoutes = require('./home');
const authRoutes = require('./auth');
const unionsRoutes = require('./unions');
const paymentsRoutes = require('./payments');
const postsRoutes = require('./posts');
const tiersRoutes = require('./tiers');
const usersRoutes = require('./users');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/unions', unionsRoutes);
router.use('/payments', paymentsRoutes);
router.use('/posts', postsRoutes);
router.use('/tiers', tiersRoutes);
router.use('/users', usersRoutes);

module.exports = router;
