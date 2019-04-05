const bookshelf = require('bookshelf');

const dbConfig = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8',
  },
};

// knex connection to database
const knex = require('knex')(dbConfig);

// db exported instance
const db = bookshelf(knex);

module.exports = db;
