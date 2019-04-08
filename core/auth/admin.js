const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/admin');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, cb) => {
    Admin.where({ email })
      .fetch()
      .then((admin) => {
        if (!admin || !admin.verifyPassword(password)) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        return cb(null, admin, { message: 'Logged In Successfully' });
      })
      .catch(err => cb(err));
  },
));
