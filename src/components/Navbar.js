import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Button2, Button3, Button4 } from './Button';
import './Navbar.css';

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
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="navbar-logo">
            Subhon Ghosh
          </Link>
        </div>
        <div className="nav-buttons">
          {button && (
            <>
              <div className="nav-button-container">
                <Button buttonStyle="btn--outline">Music</Button>
              </div>
              <div className="nav-button-container">
                <Button2 buttonStyle="btn--outline">Photography</Button2>
              </div>
              <div className="nav-button-container">
                <Button3 buttonStyle="btn--outline">Programming</Button3>
              </div>
              <div className="nav-button-container">
                <Button4 buttonStyle="btn--outline">Engineering</Button4>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
