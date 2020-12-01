import React, { useState, useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";


function Card(props) {

  return (
    <div id={props.id} className="d-inline-block cards">
      <h1>{props.common_name}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <div class="row">
            <CardItem
              src={props.image_url}
              text="Growth Data"
              label={props.scientific_name}
              path="/cultivate"
              state={props.id}        
            />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
