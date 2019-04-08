exports.up = (knex) => {
  const schema = knex.schema
    .createTable('unions', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.text('description');
      table.string('url');
      table.string('profile_picture_url');
      table.string('cover_image_url');
      table.text('about');
      table.string('facebook_url');
      table.string('instagram_url');
      table.string('twitter_url');
      table.string('youtube_url');
      table.string('google_analytics_id');
      table.string('discord_url');
      table.string('eth_address');
    })
    .createTable('admins', (table) => {
      table.increments('id').primary();
      table.integer('union_id').references('unions.id');
      table.string('name');
      table.string('email');
      table.string('encrypted_password');
      table.string('auth_token');
    })
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.integer('union_id').references('unions.id');
      table.string('name');
      table.string('email');
      table.string('encrypted_password');
      table.string('auth_token');
    })
    .createTable('tiers', (table) => {
      table.increments('id').primary();
      table.integer('union_id').references('unions.id');
      table.string('title');
      table.text('description');
      table.float('price');
      table.string('image_url');
    })
    .createTable('posts', (table) => {
      table.increments('id').primary();
      table.integer('union_id').references('unions.id');
      table.string('title');
      table.text('content');
    })
    .createTable('comments', (table) => {
      table.increments('id').primary();
      table.integer('post_id').references('posts.id');
      table.integer('user_id').references('users.id');
      table.string('title');
      table.text('content');
    })
    .createTable('payments', (table) => {
      table.increments('id').primary();
      table.integer('union_id').references('unions.id');
      table.integer('user_id').references('users.id');
      table.float('value');
    });
  return schema;
};

exports.down = (knex) => {
  const schema = knex.schema
    .dropTable('payments')
    .dropTable('tiers')
    .dropTable('comments')
    .dropTable('posts')
    .dropTable('users')
    .dropTable('admins')
    .dropTable('unions');
  return schema;
};
