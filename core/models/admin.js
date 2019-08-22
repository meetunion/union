import bcrypt from 'bcrypt'
import db from '../db'

const Admin = db.Model.extend({
  tableName: 'admins',
  union() {
    return this.belongsTo('Union', 'union_id')
  },
  verifyPassword(password) {
    const encryptedPassword = this.get('encrypted_password')
    return bcrypt.compareSync(password, encryptedPassword)
  },
})

export default db.model('Admin', Admin)
