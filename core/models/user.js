import db from '../db'

const User = db.Model.extend({
  tableName: 'users',
  hidden: ['encrypted_password'],
  union() {
    this.belongsTo('Union')
  },
  comments() {
    return this.hasMany('Comment')
  },
  payments() {
    return this.hasMany('Payment')
  },
})

module.exports = db.model('User', User)
