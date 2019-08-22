import db from '../db'

const Payment = db.Model.extend({
  tableName: 'payments',
  union() {
    this.belongsTo('Union')
  },
  user() {
    this.belongsTo('User')
  },
})

export default db.model('Payment', Payment)
