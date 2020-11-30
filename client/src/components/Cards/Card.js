import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Card(props) {
  return (
    <div className="cards">
      <h1>{props.common_name}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <div class="row">
            <CardItem
              src={props.image_url}
              text="Click here for more info"
              label={props.scientific_name}
              path="/plants"
            />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
