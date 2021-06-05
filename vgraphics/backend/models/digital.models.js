const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DigitalSchema = new Schema({

    Productcode:{
        type: String,
        required: true,
    },

    Description:{
        type: String,
        required: true,
    },

         
    Price:{
        type: Number,
        required: true,
    },

    Imguri:{
        type: String,
        required: true,
    },

    
},
{timestamps: true,}
);

const Digital = mongoose.model('Digital', DigitalSchema);

module.exports = Digital;