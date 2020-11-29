import React from "react";
import "../../src/App.css";
import ReactWeather from "../components/ReactWeather/ReactWeather"



export default function Cultivate() {
    return (
        <div className = "container">
            <ReactWeather
        forecast="5days"
        apikey="d2dc4b5a67f8f43f9ff13956727536e2"
        type="city"
        city="Miami"
        lang="en" />
    </div>
    )
} 