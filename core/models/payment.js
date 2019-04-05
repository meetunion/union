const db = require('../db');
const Union = require('./union');
const User = require('./user');

const Payment = db.Model.extend({
  tableName: 'payments',
  union() {
    this.belongsTo(Union);
  },
  user() {
    this.belongsTo(User);
  },
});

module.exports = Payment;
