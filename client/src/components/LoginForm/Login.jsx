import React, { useState } from 'react';
import LoginSuccess from '../LoginForm/LoginSuccess'
import '../LoginForm/Loginform.css';

const FormLogin = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
            <img src="images/mainpage.jpg" alt="Flowers"
            className="form-img"/>
        </div>
        {!isSubmitted ? (
            <FormLogin submitForm={submitForm} />) : 
            (<LoginSuccess />)}
        </div>

        
        </>
    );
}

export default FormLogin
