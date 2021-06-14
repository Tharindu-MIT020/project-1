const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VcardSchema = new Schema({

    Productcode:{
        type: String,
        required: true,
        unique: true,
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
        unique: true,
    },

    
},
{timestamps: true,}
);

const Vcard = mongoose.model('Vcard', VcardSchema);

module.exports = Vcard;