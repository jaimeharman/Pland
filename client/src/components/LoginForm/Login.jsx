import React, { useState } from 'react';
import LoginSuccess from '../LoginForm/LoginSuccess'
import '../LoginForm/login.css';

const FormLogin = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container-login">
        <span className="close-btn-log"></span>
        <div className="form-content-left-log">
            <img src="images/mainpage.jpg" alt="Flowers"
            className="form-img-login"/>
        </div>
        {!isSubmitted ? (
            <FormLogin submitForm={submitForm} />) : 
            (<LoginSuccess />)}
        </div>

        
        </>
    );
}
export default FormLogin
