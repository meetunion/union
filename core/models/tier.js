import db from '../db'

const Tier = db.Model.extend({
  tableName: 'tiers',
  union() {
    this.belongsTo('Union')
  },
})

export default db.model('Tier', Tier)
