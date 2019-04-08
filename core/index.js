const debug = require('debug')('union:core');
const bodyParser = require('body-parser');
const express = require('express');
const api = require('./api');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(api);

require('./auth');

function startUnion() {
  app.listen(port, () => debug(`Listening on port ${port}`));
}

module.exports = startUnion;
