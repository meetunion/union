import db from '../db'

const Post = db.Model.extend({
  tableName: 'posts',
  union() {
    this.belongsTo('Union')
  },
})

export default db.model('Post', Post)
