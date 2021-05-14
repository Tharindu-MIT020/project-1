import axios from 'axios';
import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name:'',
    address:'',
    tel:'',
    username: '',
    email: '',
    password: '',
    password2: ''
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
    // else{
    //   console.log("no erros");
    // }
     setIsSubmitting(true);

    const form = {
      name: values.name,
      address: values.address,
      tel: values.telephone,
      username: values.username,
      email: values.email,
      password: values.password
    }

    axios.post('http://localhost:8080/form/add',form )
    .then((res )=>  {
      console.log(res);
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

export default useForm;
