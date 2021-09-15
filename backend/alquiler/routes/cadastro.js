var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

let cadastro = [
  {
    "email": "ex123@123.com",
    "senha": "15s"
  },
  {
    "email": "ex123150@123.com",
    "senha": "199s"
  },
  {
    "email": "ex1555@123.com",
    "senha": "1s7d"
  },
]    

/* GET users listing. */
router.route('/')
.get ((req, res, next) => {
  res.json({
    email: "ex1555@123.com",
    senha: "1s7d"
  })
});

module.exports = router;