const db = require('../db');
const Post = require('./post');
const User = require('./user');

const Comment = db.Model.extend({
  tableName: 'comments',
  post() {
    this.belongsTo(Post);
  },
  user() {
    this.belongsTo(User);
  },
});

module.exports = Comment;
