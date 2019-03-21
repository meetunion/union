const debug = require('debug')('union:core');
const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(routes);

function startUnion() {
  app.listen(port, () => debug(`Listening on port ${port}`));
}

module.exports = startUnion;
