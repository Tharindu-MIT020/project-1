const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({

    name:{
        type: String,
        required: true,
    },

    address:{
        type: String,
        required: true,
    },

    tel:{
        type: Number,
        required: true,
    },

    username:{
        type: String,
        required: true,
        unique: true,
        
    },

    email:{
        type: String,
        required: true,
        
    },

    password:{
        type: String,
        required: true,
        
    },


},
{timestamps: true,}
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;