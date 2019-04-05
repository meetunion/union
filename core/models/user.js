const db = require('../db');
const Union = require('./union');
const Comments = require('./comment');
const Payments = require('./payment');

const User = db.Model.extend({
  tableName: 'users',
  union() {
    this.belongsTo(Union);
  },
  comments() {
    return this.hasMany(Comments);
  },
  payments() {
    return this.hasMany(Payments);
  },
});

module.exports = User;
