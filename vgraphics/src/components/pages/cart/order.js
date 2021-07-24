import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";

const useLog = (callback, validate) => {
  const [values, setValues] = useState({
    message: '',
   
    });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
 
    // setErrors(validate(values));
    // if(validate(values)){
    //   console.log("erros");
  
    // }
    // else if (setIsSubmitting(true)){
    //   console.log("no erros");

   
    // }
     setIsSubmitting(true);

     const jwt = JSON.parse(localStorage.getItem("order"));
     let productname = (jwt).name;
     let qty = (jwt).qty;
     let discription = (jwt).dis;
     let price = (jwt).price;

    const order = {
      productname:productname,
      qty: qty,
      discription: discription,
      price: price,
     
    }
    
    axios.post('http://localhost:8080/order/add', order )
        .then((res) => {
      
      console.log(res.data)
      
      if(res.data.warn){
        toast (res.data.warn,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }else if(res.data.warns){
        toast(res.data.warns);
         window.location = "/chat";
      }
      
    
    })
    .catch ((e)=>{
      console.log(e)
    })
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useLog;
