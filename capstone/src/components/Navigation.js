import React from 'react';

const Navigation =() => {
    return (
        <nav>
            <ul>
                <li className='active'><a href='index.html'><h3>Home</h3></a></li>
                <li><a href='about.html'><h3>About</h3></a></li>
                <li><a href='menu.html'><h3>Menu</h3></a></li>
                <li><a href='reservations.html'><h3>Reservations</h3></a></li>
                <li><a href='order.html'><h3>Order Online</h3></a></li>
                <li><a href='login.html'><h3>Login</h3></a></li>
            </ul>
        </nav>
    );
}

export default Navigation;