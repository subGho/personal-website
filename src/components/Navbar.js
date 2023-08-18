import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <div>Navbar</div>
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Subhon Ghosh
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar