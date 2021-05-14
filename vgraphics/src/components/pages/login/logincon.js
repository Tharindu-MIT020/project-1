import React, { useState } from 'react';
import './login.css';

import { Link } from 'react-router-dom';

const Logincon = () => {
 return (
    <div className='form-content-right'>
      <form  className='form' noValidate>
        <h1>
            Join V Graphics 
        </h1>
                <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            
          />
         
        </div>
          <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            
          />
          
        </div>
         <button className='form-input-btn' type='submit'>
          Login
        </button>
        <div>
        <p className= 'form-haveac'>  Have not an account? Register <Link to="/register"> here</Link></p>
        </div>
       
      </form>
    </div>
  );
};

export default Logincon;