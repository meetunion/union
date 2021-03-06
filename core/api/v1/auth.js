import passport from 'passport'
import express from 'express'

const authRoutes = express.Router()

authRoutes.post('/login', (req, res) => {
  passport.authenticate('local', { session: false }, (err, admin, info) => {
    if (err || !admin) {
      return res.status(400).json({
        info,
        admin,
      })
    }

    return res.json({
      email: admin.get('email'),
      auth_token: admin.get('auth_token'),
    })
  })(req, res)
})

export default authRoutes
