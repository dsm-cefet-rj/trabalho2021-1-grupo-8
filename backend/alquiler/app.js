var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// cadastra rotas
var indexRouter = require('./routes/index');
var imoveisRouter = require('./routes/imoveis');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//usa rotas
app.use('/', indexRouter);
app.use('/imoveis', imoveisRouter);


module.exports = app;
