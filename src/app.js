const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const router = require('./routes/rotas');

app.use('/api', router);

app.set('port', process.env.PORT || 3333);

module.exports = app;

