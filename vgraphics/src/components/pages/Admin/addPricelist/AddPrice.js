import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";
import swal from 'sweetalert';

const useLog = (callback, validate) => {
  const [values, setValues] = useState({
    material: '',
    size: '',
    quality: '',
    price: ''
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

    const Prices = {
      material: values.material,
      size: values.size,
      quality: values.quality,
      price: values.price
    }
    
    axios.post('http://localhost:8080/price/add', Prices )
        .then((res) => {
      
      console.log(res.data)
      
      if(res.data.warn){
        swal({
            title: "Good job!",
            text: "Price Added",
            icon: "success",
            button: "Ok",
          });
        // toast (res.data.warn,
        //   {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
          window.location = "/admin";
      }else if(res.data.warns){
        toast(res.data.warns);
         window.location = "/admin";
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
