/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use('/product', routes);

//app.use(routes);

app.listen(4494);
