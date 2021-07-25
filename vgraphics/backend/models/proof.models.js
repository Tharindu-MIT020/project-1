const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProofSchema = new Schema({

    proofcod:{
        type: String,
        required: true,
        
    },

    imagurl:{
        type: String,
        required: true,
    },
    
},
{timestamps: true,}
);

const Proof = mongoose.model('Proof', ProofSchema);

module.exports = Proof;