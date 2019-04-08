const db = require('../db');
require('./union');

const Post = db.Model.extend({
  tableName: 'posts',
  union() {
    this.belongsTo('Union');
  },
});

module.exports = db.model('Post', Post);
