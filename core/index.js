const debug = require('debug')('union:core');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function startUnion() {
  app.listen(port, () => debug(`Listening on port ${port}`));
}

module.exports = startUnion;
