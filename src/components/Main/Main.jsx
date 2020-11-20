import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import '../Main/Main.css';

function Main() {
  return (
    <div className='main-container'>
          <img src='mainpage.jpg'  />
      <h1>WHERE FUNCTIONALITY MEETS FLORA</h1>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Dig It!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
        </Button>
      </div>
    </div>
  );
}

export default Main;