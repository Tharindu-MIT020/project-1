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

     const variable = localStorage.getItem("cart");
     console.log( variable[0].name)
     let cart
     variable.forEach(element => {
       cart = {
         name:element.name,
         

       }
       
     });

     console.log(cart)
    //  let productname = variable.name;
    //  console.log(productname)
     
    



    // const order = {
    //   productname:productname,
    //   qty: qty,
    //   discription: discription,
    //   price: price,
     
    // }
    
    axios.post('http://localhost:8080/order/add',  )
        .then((res) => {
      
      console.log(res.data)
      
      // if(res.data.warn){
      //   toast (res.data.warn,
      //     {
      //       position: "top-center",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     });
      // }else if(res.data.warns){
      //   toast(res.data.warns);
      //    window.location = "/chat";
      // }
      
    
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
