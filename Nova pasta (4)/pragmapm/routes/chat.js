var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {

    let chat = [
        {
            "chat": "Olá,"
        },
        {
            "chat": "Mundo!"
        },
        {
            "chat": "Olá, Mundo!"
        }
    ]

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(chat);
});

module.exports = router;