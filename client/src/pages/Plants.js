import React from "react";
import "../../src/App.css";
import { Form, Button } from 'react-bootstrap';
import Card from '../components/Cards/Card';
const axios = require('axios');

export default function Plants() {


    function handleClick(event) {
        event.preventDefault()
        const plantName = document.getElementById("formPlantSearch").value
        console.log(plantName);

        axios.get(`\search:${plantName}`).then(function (response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        }).then(function(){
            console.log("it worked");
        })

        // const promise = axios

        // .get(`/search:${plantName}`)
        // .then(function (response){
        //     console.log(response.data);
        // })
        // return promise
    }


    return (
        <div className="container">
            <h1 className='Plants'>PICK YOUR PLANT</h1>
            <Form>
                <Form.Group controlId="formPlantSearch">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="input" placeholder="Common Name" />
                    <Form.Text className="text-muted">
                        Search for a specific plant using its common name.
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
    </Button>
            </Form>

            <Card />
        </div>
    )
} 