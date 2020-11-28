import React, { useState } from 'react';
import FormSignup from '../Form/FormSignup';
import FormSuccess from '../Form/FormSuccess';
import Footer from '../Footer/Footer';
import './form.css';

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
            <img src="images/handplant.jpg" alt="holding a plant"
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

