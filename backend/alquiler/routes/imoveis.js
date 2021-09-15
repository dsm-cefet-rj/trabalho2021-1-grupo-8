var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

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
]    

/* GET users listing. */
router.route('/')
.get ((req, res, next) => {
  res.json({
    desc: "casa de 80m² com 3 quartos",
    preço: "R$2000/mes"
  })
});

module.exports = router;