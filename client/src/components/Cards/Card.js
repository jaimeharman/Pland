import React, { useState, useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import API from '../../utils/api'

function Card(props) {

  async function grabID() {

    const id = props.id

    await API.findByID(id)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div id={props.id} className="cards">
      <h1>{props.common_name}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <div className="row">
            <CardItem
              key={props.id}
              src={props.image_url}
              text="Growth Data"
              label={props.scientific_name}
              path="/cultivate"
              state={props.id}
              onClick={ grabID }
            />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
