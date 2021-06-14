const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OffsetSchema = new Schema({

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

const Offset = mongoose.model('Offset', OffsetSchema);

module.exports = Offset;