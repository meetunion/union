const bcrypt = require('bcrypt');
const db = require('../db');
const Union = require('./union');

const Admin = db.Model.extend({
  tableName: 'admins',
  union() {
    this.belongsTo(Union);
  },
  verifyPassword(password) {
    const encryptedPassword = this.get('encrypted_password');
    return bcrypt.compareSync(password, encryptedPassword);
  },
});

module.exports = Admin;
