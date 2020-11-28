import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import '../Nav/nav.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  useEffect (() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
<<<<<<< HEAD:client/src/components/Nav/Navbar.jsx
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           Pland <i className="fas fa-seedling"></i>
=======
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Pland
>>>>>>> 3fba89826ee78cda93095cc4d98b8c8f272a689f:src/components/Nav/Navbar.jsx
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
                onClick={closeMobileMenu}
              >
               Pick Your Plant
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Cultivate'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Cultivate  
              </Link>
            </li>

            <li>
              <Link
                to='/Signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;