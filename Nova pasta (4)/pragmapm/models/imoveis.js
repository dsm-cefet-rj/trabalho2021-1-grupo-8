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

module.exports = imoveisSchema;
