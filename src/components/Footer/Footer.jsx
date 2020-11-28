import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Jaime's Github</Link>
            <Link to='/'>Oscar's Github</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;