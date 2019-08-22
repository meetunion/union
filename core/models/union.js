import db from '../db'

const Union = db.Model.extend({
  tableName: 'unions',
  posts() {
    return this.hasMany('Post')
  },
  admins() {
    return this.hasMany('Admin')
  },
  users() {
    return this.hasMany('User')
  },
  tiers() {
    return this.hasMany('Tier')
  },
  payments() {
    return this.hasMany('Payment')
  },
})

module.exports = db.model('Union', Union)
