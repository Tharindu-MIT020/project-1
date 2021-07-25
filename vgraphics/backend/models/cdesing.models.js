const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CdesignSchema = new Schema({

    name:{
        type: String,
        required: true,
        
    },
    designtype:{
        type: String,
        required: true,
    },
     imagurl:{
        type: String,
        required: true,
    },
     description:{
        type: String,
        required: true,
    },
    
},
{timestamps: true,}
);

const Cdesign = mongoose.model('Cdesign', CdesignSchema);

module.exports = Cdesign;