var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var indexRouter = require('./routes/index');
var imoveisRouter = require('./routes/imoveis');
var loginRouter = require('./routes/login');
var chatRouter = require('./routes/chat');
var usersRouter = require('./routes/users');

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

app.use(session({
    name: 'session-id',
    secret: '12345-54321-9876-67890',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
  }));

app.use('/users', usersRouter);

function auth (req, res, next) {
    console.log(req.session);

    if(!req.session.user) {
        var err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    }
    else {
        if (req.session.user === 'authenticated') {
            next();
          }
          else {
            var err = new Error('You are not authenticated!');
            err.status = 403;
            return next(err);
          }
    }
  }
  
  app.use(auth);
  

app.use(express.static(path.join(__dirname, 'public')));

app.use('/imoveis', imoveisRouter);
app.use('/login', loginRouter);
app.use('/chat', chatRouter);

module.exports = app;
