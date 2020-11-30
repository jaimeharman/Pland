import React from 'react';
import useLogin from './useLogin';
import validate from './validate';
import '../LoginForm/login.css';

const FormLogin = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors } 
    = useLogin(submitForm, 
        validate
        );

  return (
      <div className="form-content">
        <form className="login" onSubmit={handleSubmit}>
          <h1>
            Log into your account! 
          </h1>
          <div className="form-inputs-login">
            <label htmlFor="username" className="form-label-login">
              Username
            </label>
            <input
              id="username_login"
              type="text"
              name="username"
              className="form-input-login"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs-login">
            <label htmlFor="password" className="form-label-login">
              Password
            </label>
            <input
              id="password_login"
              type="password"
              name="password"
              className="form-input-login"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
             {errors.username && <p>{errors.email}</p>}
          </div>
          <button className="form-input-btnlog" type="submit">
              Login</button>
              <span className="form-input-login">
                  Need an account? Sign-up <a href='http://localhost:3000/sign-up'>Sign-up</a>
              </span>
        </form>
      </div>
    );
  };
  
  export default FormLogin;