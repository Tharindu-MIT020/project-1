import React, { useState } from 'react';
import './login.css';
import Logincon from './logincon';


const Login = () => {
  return (
    <>
      <div className='login-container'>
        <div className='login-content-left'>
        <img className='login-img' src='img/login.jpg' alt='spaceship' />
        </div>
        <Logincon></Logincon>
        </div>
    </>
  );
  };

export default Login;
