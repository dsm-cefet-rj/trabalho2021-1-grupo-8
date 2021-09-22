var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {

  let login = [
    {
      "email": "oioi@oioi.com",
      "senha": "1234"
    },
    {
      "email": "oioi@oioi.com",
      "senha": "1234"
    },
    {
      "email": "oioi@oioi.com",
      "senha": "1234"
    },
    {
      "email": "oioi@oioi.com",
      "senha": "1234"
    }
  ]

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.json(login);
});

module.exports = router;
