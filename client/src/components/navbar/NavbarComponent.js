import React from 'react' ;
import './Navbar.css';

const navbar = () => {
    return (
        <nav>
            <h1>SJJ</h1>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li>Cart: <span>0</span></li>
            </ul>
           
        </nav>
    )
}

export default navbar;