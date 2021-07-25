const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MakepaymentSchema = new Schema({

     name:{
        type: String,
        required: true,
        
    },

    price:{
        type: String,
        required: true,
        
    },

    method:{
        type: String,
        required: true,
    },
    images:{
        type: String,
        required: true,
    },
    
},
{timestamps: true,}
);

const Makepayment = mongoose.model('Makepayment', MakepaymentSchema);

module.exports = Makepayment;