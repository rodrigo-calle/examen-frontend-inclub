import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar-container">    
            <Link to='/' style={{textDecoration: 'none'}}>
                <p className="nabar-container__name">Frontend Test</p>
            </Link>       
        </div>
    )
}

export default Navbar;