import React, { useState } from 'react';
import FormSignup from '../Form/FormSignup';
import FormSuccess from '../Form/FormSuccess';
import './form.css';
import signup from '../../../src/images/signup.jpg';

const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-conten-left">
            <img src={signup} alt="potted plants"
            className="form-img"/>
        </div>
        {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />) : 
            (<FormSuccess />)}
        </div>

        
        </>
    );
}

export default Form

