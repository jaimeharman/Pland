import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import researchplant from '../../../src/images/researchplant.jpg';
import smelltheroses from '../../../src/images/smelltheroses.jpg';
import products from '../../../src/images/products.jpg';
import growth from '../../../src/images/growth.jpg';
import sustainable from '../../../src/images/sustainable.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Plan, Pick, Cultivate</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={researchplant} alt="Research plant" height={20} width={20}
              text='Research your plants'
              label='Planning'
              path='/plants'
            />
            <CardItem
              src={smelltheroses} alt="Smelling Roses" height={20} width={20}
              text='Compare your plants needs to local weather'
              label='Cultivate'
              path='/cultivate'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={products} alt="spray the plant" height={20} width={20}
              text='Find what you need locally'
              label='Product Assist'
              path='/cultivate'
            />
            <CardItem
              src={growth} alt="holding a plant" height={20} width={20}
              text='Sign-up for a free account'
              label='Sign-up'
              path='/sign-up'
            />
            <CardItem
              src={sustainable} alt="green thumb" height={20} width={20}
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