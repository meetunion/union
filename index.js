if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // eslint-disable-line global-require
}

const debug = require('debug')('union:core');
const union = require('./core');

debug('Starting Union');

union();
