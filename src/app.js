const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('./db/mongoose');

require('dotenv').config();

// const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1', api);
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);
app.use(
  express.static(path.join(`${__dirname}`, '..', '/client/build/static'))
);
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}`, '..', '/client/build/index.html'));
});

module.exports = app;
