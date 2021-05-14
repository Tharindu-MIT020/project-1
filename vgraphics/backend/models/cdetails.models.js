const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cdetailsSchema = new Schema({
  cname: { 
      type: String, 
      required: true 
    },
   address: { 
      type: String, 
      required: true 
    },
  telephone: { 
      type: String, 
      required: true 
    },
    username: { 
      type: String, 
      required: true 
    },
    email: { 
        type: String, 
        required: true 
      },
    
    password: { 
        type: String, 
        required: true 
      },
}, {
  timestamps: true,
});

const Cdetails = mongoose.model('Cdetails', cdetailsSchema);

module.exports = Cdetails;