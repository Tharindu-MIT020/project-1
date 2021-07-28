const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestSchema = new Schema({

    product:{
        type: String,
        required: true,
        
    },
    name:{
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
    },  imageUrl:{
        type: String,
        required: true,
    },  fil:{
        type: String,
        required: true,
    },  dis:{
        type: String,
        required: true,
    },  qty:{
        type: String,
        required: true,
    },
    
},
{timestamps: true,}
);

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;