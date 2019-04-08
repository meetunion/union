const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const Admin = require('../models/admin');

passport.use(new BearerStrategy(
  (token, cb) => {
    Admin.where({ auth_token: token })
      .fetch()
      .then((admin) => {
        if (!admin) { return cb(null, false); }
        return cb(null, admin);
      });
  },
));
