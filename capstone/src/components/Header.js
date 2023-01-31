import React from 'react';
import Navigation from './Navigation';
import Logo from "../assets/Logo.svg";

const Header =() => {
    return (
        <header>
            <div>
                <img src={Logo} alt="Little Lemon Logo" id="logo" name="logo"/>
            </div>
            <div id="navbar">
                <Navigation />
            </div>
        </header>
    );
}

export default Header;