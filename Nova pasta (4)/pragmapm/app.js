var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var imoveisRouter = require('./routes/imoveis');
var loginRouter = require('./routes/login');
var chatRouter = require('./routes/chat');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const imoveisSchema = new Schema ({
    desc: {
        type: String,
        require: true,
    },
    preco: {
        type: String,
        require: true,
    }
})

module.exports = imoveisSchema;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/imoveis', imoveisRouter);
app.use('/login', loginRouter);
app.use('/chat', chatRouter);

module.exports = app;
