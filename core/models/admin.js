const bcrypt = require('bcrypt');
const db = require('../db');
require('./union');

const Admin = db.Model.extend({
  tableName: 'admins',
  union() {
    return this.belongsTo('Union', 'union_id');
  },
  verifyPassword(password) {
    const encryptedPassword = this.get('encrypted_password');
    return bcrypt.compareSync(password, encryptedPassword);
  },
});

module.exports = db.model('Admin', Admin);
