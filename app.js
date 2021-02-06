const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('./swagger.json');

const music = require('./routes/music');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api', music);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

app.listen(5000);
