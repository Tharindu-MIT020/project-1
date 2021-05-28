import axios from 'axios';

export default function validateInfo(values) {
    let errors = {};
  


    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    else if(values.username != "tharindu"){
       alert("Username invalide") 
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password=="12345678"){
        alert("login success")
    }
  
    
    return errors;
  }
  