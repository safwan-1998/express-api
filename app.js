const express = require('express');
const bodyparser = require('body-parser');
const music = require('./routes/music')

const app = express();

app.use(bodyparser.json())
app.use(logger)
app.use('/api', music)

function logger(req, res, next) {
    console.log('WELCOME !!!!')
    next()
}

app.listen(5000);
