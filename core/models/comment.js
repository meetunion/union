import db from '../db'

const Comment = db.Model.extend({
  tableName: 'comments',
  post() {
    this.belongsTo('Post')
  },
  user() {
    this.belongsTo('User')
  },
})

export default db.model('Comment', Comment)
