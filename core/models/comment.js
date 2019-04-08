const db = require('../db');
require('./post');
require('./user');

const Comment = db.Model.extend({
  tableName: 'comments',
  post() {
    this.belongsTo('Post');
  },
  user() {
    this.belongsTo('User');
  },
});

module.exports = db.model('Comment', Comment);
