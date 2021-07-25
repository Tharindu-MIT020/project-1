const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QChatSchema = new Schema({

    name:{
        type: String,
        required: true,
        
    },

    message:{
        type: String,
        required: true,
    },
    
},
{timestamps: true,}
);

const QChat = mongoose.model('QChat', QChatSchema);

module.exports = QChat;