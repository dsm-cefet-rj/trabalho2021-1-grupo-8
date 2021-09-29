const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const loginSchema = new Schema ({
    email: {
        type: String,
        require: true,
    },
    senha: {
        type: String,
        require: true,
    }
})

var Login = mongoose.model('login', loginSchema); //nome da collection do do mongodb

module.exports = Login;
