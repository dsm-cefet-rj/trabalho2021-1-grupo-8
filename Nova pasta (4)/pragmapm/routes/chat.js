var express = require('express');
var router = express.Router();
var cors = require('cors');
const Chat = require ('../models/chat');
var authenticate = require('../authenticate');


router.use(cors());

router.route('/')
.get(authenticate.verifyUser, (req, res, next) => {
    Chat.find({}) // pega tudo que tem na collection chat do banco
    .then((chat) => {
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(chat);
    }, (err) => { console.log(err); });
})

.post(authenticate.verifyUser, (req, res, next) => {
    Chat.create(req.body)
    .then((chat) => {
        console.log('Chat criado: ', chat);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(chat);
    }, (err) => console.log(err))
})

module.exports = router;
