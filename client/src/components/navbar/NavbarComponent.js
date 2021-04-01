import React from 'react' ;
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="basket"><Link to ={'/cart'}>Basket</Link></div>
                  <div class="dropdown">
                        <button class="dropbtn">Products</button>
                    <div class="dropdown-content">
                        <a href='/'>Home</a>
                        <a href='/product/laptop'>Laptop</a>
                        <a href='/product/desktop'>Desktop</a>
                        <a href='/product/mobile'>Mobiles</a>
                        <a href='/product/smartWatch'>Smartwatches</a>
                        <a href='/product/accessories'>Accessories</a>
                        <a href='./components/logIn/LogIn'>Log in</a>
                    </div>
                    </div>
        </nav>
    )
}

export default Navbar