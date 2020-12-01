import React, { useState, useEffect } from "react";
import "../../src/App.css";
import { Form, Button } from 'react-bootstrap';
import ReactWeather from "../components/ReactWeather/ReactWeather"
import TempCard from '../components/cultivateCard/TempCard';
import PlantCard from '../components/cultivateCard/PlantCard';


export default function Cultivate() {
    return (
        <>
          <TempCard />
          <PlantCard />
          {/* <Footer /> */}
        </>
      );

    const [cityLoc, setCityLoc] = useState([])

    function handleClick(event) {
        event.preventDefault()
        setCityLoc(document.getElementById("citySearch").value)
    }

    // useEffect(() => {
    //     console.log(cityLoc);
    // }, [cityLoc])

    // return (
    //     <div className="container">
    //         <Form>
    //             <Form.Group controlId="citySearch">
    //                 <Form.Label>City</Form.Label>
    //                 <Form.Control type="input" placeholder="Search by City" />
    //                 <Form.Text className="text-muted">
    //                     Search for your city.
    //             </Form.Text>
    //             </Form.Group>
    //             <Button variant="primary" type="submit" onClick={handleClick}>
    //                 Submit
    //             </Button>
    //         </Form>

    //         <ReactWeather
    //             forecast="5days"
    //             apikey="d2dc4b5a67f8f43f9ff13956727536e2"
    //             type="city"
    //             city="Orlando"
    //             lang="en" />
    //     </div>
        
    // )

} 