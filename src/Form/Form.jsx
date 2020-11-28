import React, { useState } from 'react';
import FormSignup from '../Form/FormSignup';
import FormSuccess from '../Form/FormSuccess';
import './form.css';

const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />) : 
            (<FormSuccess />)}

        </div>
    )
}

export default Form

