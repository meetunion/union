const db = require('../db');
const Union = require('./union');

const Post = db.Model.extend({
  tableName: 'posts',
  union() {
    this.belongsTo(Union);
  },
});

module.exports = Post;
