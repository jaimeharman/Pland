import React from 'react'
import {Card} from "react-bootstrap";

const PlantCard = () => {
    const cardInfo = [
        {image: '', common_name: "", scientific_name: "", growth: "", humidity: "", temperature: "", toxicity: ""}
    ];

const renderCard = (card, index) => {
    return (
        <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          {card.text}
        </Card.Body>
      </Card>
    )
}
    
    return (
        <div className="PlantCard">
            {cardInfo.map(renderCard)}
      </div>
    )
}

export default PlantCard;