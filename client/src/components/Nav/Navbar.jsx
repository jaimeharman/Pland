import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import '../Nav/nav.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PLAND
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/plants'
                className='nav-links'
                onClick={closeMobileMenu}>
                Pick Your Plant
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cultivate'
                className='nav-links'
                onClick={closeMobileMenu}>
                Cultivate
              </Link>
            </li>

            <li>
              <Link
                to='/members'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                LOGIN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}

          <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                SIGN UP
              </Link>
            </li>
          </div>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </nav>
    </>
  );
}

export default Navbar;