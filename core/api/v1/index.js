import express from 'express'

import authRoutes from './auth'
import unionRoutes from './unions'
import homeRoutes from './home'
import paymentsRoutes from './payments'
import postsRoutes from './posts'
import commentsRoutes from './comments'
import tiersRoutes from './tiers'
import usersRoutes from './users'

const router = express.Router()

router.use('/', homeRoutes)
router.use('/auth', authRoutes)
router.use('/union', unionRoutes)
router.use('/payments', paymentsRoutes)
router.use('/posts', postsRoutes)
router.use('/comments', commentsRoutes)
router.use('/tiers', tiersRoutes)
router.use('/users', usersRoutes)

module.exports = router
