var express = require('express');
var router = express.Router();
var cors = require('cors');
const Login = require ('../models/login');


router.use(cors());

router.route('/')
.get((req, res, next) => {
    Login.find({}) // pega tudo que tem na collection login do banco
    .then((login) => {
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(login);
    }, (err) => { console.log(err); });
})

.post((req, res, next) => {
    Login.create(req.body)
    .then((login) => {
        console.log('login criado: ', login);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(login);
    }, (err) => console.log(err))
})

module.exports = router;