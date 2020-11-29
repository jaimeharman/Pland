import React from "react";
import "../../src/App.css";
import { Form, Button } from 'react-bootstrap';



export default function Plants() {
    return (
        <div className = "container">
            <h1 className='Plants'>PICK YOUR PLANT</h1>
        <Form>
            <Form.Group controlId="formPlantSearch">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="input" placeholder="Common Name" />
                <Form.Text className="text-muted">
                    Search for a specific plant using its common name.
      </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
    </Button>
        </Form>
        </div>
    )
} 