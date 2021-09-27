var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var imoveisRouter = require('./routes/imoveis');
var loginRouter = require('./routes/login');
var chatRouter = require('./routes/chat');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/pragmapm';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("conectado");
}, (err) => { console.log(err); });

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
