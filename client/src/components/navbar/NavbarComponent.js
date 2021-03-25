// import React from 'react' ;
// import './Navbar.css';
// import logo from '../../images/LogoSJJTech.png'
// // import cart from "./images/cart.png";



// const navbar = () => {
//     return (
//         <nav className="nav">
            

//             {/* <h1>SJJ</h1> */}
//             <h1>SJJ</h1>
//             <ul class = "brand-logo"><img src={logo}></img></ul>
            
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Products</a></li>
//             {/* <img src={logo} /> */}
//             {/* <li>Cart: <span>0</span></li> */}
//             </nav>
        
        
//     )
// }

// export default navbar;

//////////////////////

import React from 'react' ;
import './Navbar.css';

const navbar = () => {
    return (
        <nav>
            <h1>SJJ</h1>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Contact</a></li>
            <li>Cart: <span>0</span></li>
            </ul>
           
        </nav>
    )
}

export default navbar;
