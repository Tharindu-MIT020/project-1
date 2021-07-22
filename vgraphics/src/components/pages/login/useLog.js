import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";

const useLog = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
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
 
    setErrors(validate(values));
    // if(validate(values)){
    //   console.log("erros");
  
    // }
    // else if (setIsSubmitting(true)){
    //   console.log("no erros");

   
    // }
     setIsSubmitting(true);

    const form = {
      username: values.username,
     
      password: values.password
    }
    
    axios.post('http://localhost:8080/form/login',form )
    .then((res) => {
      localStorage.setItem("token", res.data.jwt);
     
      console.log(res.data)
      
      if(res.data.warn){
        toast (res.data.warn)
      }
      else if(res.data.msg){
                  const jwt = localStorage.getItem("token");
                  let type = jwtDecode(jwt).type;
                  if(type === "user"){
                      toast (res.data.msg)
                      //history.push("/");
                      window.location = "/";
                  }
                  else if(type === "admin"){
                      toast (res.data.msg)
                      //history.push("/owner-main-page");
                      window.location = "/admin";
                  }
        // toast (res.data.msg)
        // window.location='/';
      } 

      
    
    })
    .catch ((e)=>{
      console.log(e)
    })
    
  };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //     }
  //   },
  //   [errors]
  // );

  return { handleChange, handleSubmit, values, errors };
};

export default useLog;
