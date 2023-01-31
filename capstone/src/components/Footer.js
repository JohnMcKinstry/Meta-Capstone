import React from 'react';
import Logo from "../assets/Logo .svg";

const Footer =() => {
    return (
        <footer>
            <p>
                <img src={Logo} alt="Little Lemon Logo" id="logo" name="logo"/>
                <div className='footerLinks'>
                    <a href='index.html'>Home</a>
                    <a href='about.html'>About</a>
                    <a href='menu.html'>Menu</a>
                    <a href='reservations.html'>Reservations</a>
                    <a href='order.html'>Order Online</a>
                    <a href='login.html'>Login</a>
                </div>
            </p>
            <p>Copyright © 2023 Little Lemon Restaurant</p>
        </footer>
    );
}

export default Footer;