import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            {/* <h1>Plants</h1> */}
            <div className="cards__container">
            <div className="cards__wrapper">
            <ul className="cards_items">
             <CardItem
             src="images/succulents.jpg"
             text="Plant Identification"
             label="Plants"
             path="/plants">
            />
            </CardItem>  
            </ul>
            </div>


            </div>

            
        </div>
    )
}

export default Cards