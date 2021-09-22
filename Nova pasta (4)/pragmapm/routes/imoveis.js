var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {

  let imoveis = [
    {
      "desc": "casa de 80m² com 3 quartos",
      "preço": "R$2000/mes"
    },
    {
      "desc": "apartamento de 50m² com 1 quarto",
      "preço": "R$1500/mes"
    },
    {
      "desc": "Loft de 40m²",
      "preço": "R$800/mes"
    },
    {
      "desc": "Kitnet de 35m²",
      "preço": "R$700/mes"
    }
  ]

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.json(imoveis);
});

module.exports = router;
