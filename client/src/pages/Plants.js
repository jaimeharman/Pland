import React, { useState, useEffect } from "react";
import "../../src/App.css";
import { Form, Button } from 'react-bootstrap';
import Card from '../components/Cards/Card';
import API from '../utils/api'

export default function Plants() {
    const [plantData, setPlantData] = useState([])

    async function handleClick(event) {
        event.preventDefault()
        const commonName = document.getElementById("formPlantSearch").value
        await API.findPlant(commonName).then((res) => {
            setPlantData(res.data.data)

        }).catch((err) => console.log(err))

        const id = "932481"
        await API.findByID(id).then((res) => {
            // setPlantData(res.data.data)
            console.log(res.data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        console.log(plantData);
    }, [plantData])

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
            {plantData.map(plantCard => {
                return <Card {...plantCard}/>
            })}
        </div>
    )
}