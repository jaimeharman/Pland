import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Plan, Pick, Cultivate</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/researchplant.jpg'
              text='Research your plants'
              label='Planning'
              path='/plants'
            />
            <CardItem
              src='images/smelltheroses.jpg'
              text='Compare your plants needs to local weather'
              label='Cultivate'
              path='/cultivate'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/products.jpg'
              text='Find what you need locally'
              label='Product Assist'
              path='/cultivate'
            />
            <CardItem
              src='images/mainpage.jpg'
              text='Sign-up for a free account'
              label='Sign-up'
              path='/sign-up'
            />
            <CardItem
              src='images/sustainable.jpg'
              text='Find out more about sustainable gardening'
              label='Go Green'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;