import React, { useState } from 'react';
import FormSignup from '../Form/FormSignup';
import FormSuccess from '../Form/FormSuccess';
import './form.css';
import growth from '../../../src/images/growth.jpg';

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
            <img src={growth} alt="heart plant"
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

