const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PricesSchema = new Schema({

    material:{
        type: String,
        required: true,
    },

    size:{
        type: String,
        required: true,
    },

    quality:{
        type: String,
        required: true,
    },
        
    price:{
        type: Number,
        required: true,
        unique: true,
        
    },

    
},
{timestamps: true,}
);

const Prices = mongoose.model('Prices', PricesSchema);

module.exports = Prices;