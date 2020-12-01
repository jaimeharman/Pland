import React from 'react';
import { Button } from '../Button/Button';
import './CultMain.css';



function CultMain() {
  return (
    <div className='cultmain-container'>
      <h1>SUSTAINABLE GARDENING</h1>
      <div className='cultmain-btns'>
        <Button
          className='cult-btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Research It!
        </Button>
        <Button
          className='cult-btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
          path="/plants.js"
        >
        </Button>
      </div>
      </div>
  );
}

export default CultMain;