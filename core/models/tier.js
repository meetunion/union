const db = require('../db');
const Union = require('./union');

const Tier = db.Model.extend({
  tableName: 'tiers',
  union() {
    this.belongsTo(Union);
  },
});

module.exports = Tier;
