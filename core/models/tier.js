const db = require('../db');
require('./union');

const Tier = db.Model.extend({
  tableName: 'tiers',
  union() {
    this.belongsTo('Union');
  },
});

module.exports = db.model('Tier', Tier);
