const db = require('../db');
require('./union');
require('./comment');
require('./payment');

const User = db.Model.extend({
  tableName: 'users',
  union() {
    this.belongsTo('Union');
  },
  comments() {
    return this.hasMany('Comment');
  },
  payments() {
    return this.hasMany('Payment');
  },
});

module.exports = db.model('User', User);
