const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const chatSchema = new Schema ({
    chat: {
        type: String,
        require: true,
    }
})

var Chat = mongoose.model('chat', chatSchema); //nome da collection do do mongodb

module.exports = Chat;
