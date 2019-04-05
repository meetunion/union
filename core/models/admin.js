const db = require('../db');
const Union = require('./union');

const User = db.Model.extend({
  tableName: 'admins',
  union() {
    this.belongsTo(Union);
  },
});

module.exports = User;
