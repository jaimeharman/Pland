import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
<<<<<<< HEAD:client/src/components/Main/Main.jsx
import './Main.css';
=======
import '../Main/main.css';

>>>>>>> 3fba89826ee78cda93095cc4d98b8c8f272a689f:src/components/Main/Main.jsx

function Main() {
  return (
    <div className='main-container'>
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
          onClick={() => console.log('hey')}
        >
        </Button>
      </div>
    </div>
  );
}

export default Main;