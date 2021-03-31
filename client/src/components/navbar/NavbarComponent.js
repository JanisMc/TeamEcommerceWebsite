import React from 'react' ;
import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav>
            <div className="logoLeft">SJJ Tech</div>
            <div className="basket">Basket</div>
                  <div class="dropdown">
  <button class="dropbtn">Products</button>
  <div class="dropdown-content">
    <a href='/'>Home</a>
    <a href='/product/laptop'>Laptop</a>
    <a href='/product/desktop'>Desktop</a>
    <a href='/product/mobile'>Mobiles</a>
    <a href='/product/smartWatch'>Smartwatches</a>
    <a href='/product/accessories'>Accessories</a>
    <a href="#">Log in</a>
  </div>
</div>
            </nav>
    )
}
export default Navbar;