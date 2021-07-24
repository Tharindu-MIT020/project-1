const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    productname:{
        type: String,
        required: true,
        
    },

    qty:{
        type: String,
        required: true,
    },  
    
    discription:{
        type: String,
        required: true,
    },  
    
    price:{
        type: String,
        required: true,
    },
    
},
{timestamps: true,}
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

   