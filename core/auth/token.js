import passport from 'passport'
import passportBearer from 'passport-http-bearer'
import Admin from '../models/admin'

const BearerStrategy = passportBearer.Strategy

passport.use(
  new BearerStrategy((token, cb) => {
    Admin.where({ auth_token: token })
      .fetch()
      .then((admin) => {
        if (!admin) {
          return cb(null, false)
        }
        return cb(null, admin)
      })
  }),
)

const tokenAuth = passport.authenticate('bearer', { session: false })

module.exports = tokenAuth
