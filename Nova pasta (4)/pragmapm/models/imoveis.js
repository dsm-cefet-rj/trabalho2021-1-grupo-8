const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const imoveisSchema = new Schema ({
    desc: {
        type: String,
        require: true,
    },
    preco: {
        type: String,
        require: true,
    }
})

var Imoveis = mongoose.model('imoveis', imoveisSchema); //nome da collection do do mongodb

module.exports = Imoveis;
