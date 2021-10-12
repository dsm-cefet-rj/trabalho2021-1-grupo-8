var express = require('express');
var router = express.Router();
var cors = require('cors');
const Imoveis = require ('../models/imoveis');
var authenticate = require('../authenticate');

router.use(cors());

/* GET users listing. */
router.route('/')
.get(authenticate.verifyUser, (req, res, next) => {
  Imoveis.find({}) // pega tudo que tem na collection imoveis do banco
  .then((imoveis) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(imoveis);
  }, (err) => { console.log(err); });
})
.post(authenticate.verifyUser, (req, res, next) => {
  Imoveis.create(req.body)
  .then((imoveis) => {
      console.log('imoveis criado: ', imoveis);
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(imoveis);
  }, (err) => console.log(err))
})


module.exports = router;
