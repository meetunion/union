const bookshelf = require('bookshelf');
const knex = require('knex');

const environment = process.env.ENVIRONMENT || 'development';
const config = require('./knexfile.js')[environment];

// knex connection to database
const knexInstance = knex(config);

// db exported instance
const db = bookshelf(knexInstance);
db.plugin('registry');
db.plugin('visibility');

module.exports = db;
