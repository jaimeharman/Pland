import React from "react";
import "../../src/App.css";
import { Form, Button } from 'react-bootstrap';


export default function Plants() {

    async function handleClick(event) {
import Card from '../components/Cards/Card';

export default function Plants() {


    function handleClick(event) {
        event.preventDefault()
        const commonName = document.getElementById("formPlantSearch").value
        await API.findPlant(commonName).then((res) => {
            console.log(res)
        }).catch((err) => console.log(err))
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