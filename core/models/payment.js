const db = require('../db');
require('./union');
require('./user');

const Payment = db.Model.extend({
  tableName: 'payments',
  union() {
    this.belongsTo('Union');
  },
  user() {
    this.belongsTo('User');
  },
});

module.exports = db.model('Payment', Payment);
