import React from 'react';
import '../LoginForm/login.css';

const LoginSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='images/smelltheroses.jpg' alt='success-image' />
    </div>
  );
};

export default LoginSuccess;