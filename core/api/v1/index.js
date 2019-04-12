const express = require('express');

const homeRoutes = require('./home');
const authRoutes = require('./auth');
const unionRoutes = require('./unions');
const paymentsRoutes = require('./payments');
const postsRoutes = require('./posts');
const commentsRoutes = require('./comments');
const tiersRoutes = require('./tiers');
const usersRoutes = require('./users');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/union', unionRoutes);
router.use('/payments', paymentsRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);
router.use('/tiers', tiersRoutes);
router.use('/users', usersRoutes);

module.exports = router;
