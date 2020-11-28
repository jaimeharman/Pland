import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Plan Your Garden</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/assortedplants.jpg'
              text='Pick Your Plants'
              label='Local Choices'
              path='/plants'
            />
            <CardItem
              src='images/plantid.jpg'
              text='Cultivate'
              label='Compare results'
              path='/Cultivate'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;