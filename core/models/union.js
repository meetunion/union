const db = require('../db');
const Admins = require('./admin');
const Users = require('./user');
const Posts = require('./post');
const Tiers = require('./tier');
const Payments = require('./payment');

const Union = db.Model.extend({
  tableName: 'unions',
  posts() {
    return this.hasMany(Posts);
  },
  admins() {
    return this.hasMany(Admins);
  },
  users() {
    return this.hasMany(Users);
  },
  tiers() {
    return this.hasMany(Tiers);
  },
  payments() {
    return this.hasMany(Payments);
  },
});

module.exports = Union;
