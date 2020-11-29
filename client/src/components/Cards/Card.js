import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Card() {
  return (
    <div className="cards">
      <h1>Plant</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/researchplant.jpg"
              text="Research your plants"
              label="Planning"
              path="/plants"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
