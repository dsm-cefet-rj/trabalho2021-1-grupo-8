var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var imoveisRouter = require('./routes/imoveis');
var loginRouter = require('./routes/login');
var chatRouter = require('./routes/chat');
var usersRouter = require('./routes/users');

var config = require('./config');

const mongoose = require('mongoose');

const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("conectado");
}, (err) => { console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/imoveis', imoveisRouter);
app.use('/chat', chatRouter);

module.exports = app;
