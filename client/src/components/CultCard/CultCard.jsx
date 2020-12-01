import React from "react";
import enviro from "../../images/enviro.jpg";
import "./card-style.css";

function CultCard(props) {
  return (
    <div className="cultcard text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="plants" className="card-img-top" />
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary" >{props.text}</p>
          <a href={props.link}
            className="btn btn-outline-success">

            Go to Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default CultCard;
