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
        <div class="dropdown">
  <button class="dropbtn">Products</button>
  <div class="dropdown-content">
    <a href='/'>Home</a>
    <a href='/product/desktop'>Contact</a>
    <a href="#">Log in</a>
  </div>
</div>
        // <nav>
            
        //     <h1>SJJ</h1>
        //     <div className="dropdown">
        //     <button className="dropdown">Products</button>
        //         <div className="drop-down-content">
        //         <li><a href="#">Home</a></li>
        //     <li><a href="#">Products</a></li>
        //     <li><a href="#">Log In</a></li>
        //     <li><a href="#">Contact</a></li>
        //         </div>
        //         </div>
                
            
        //     {/* <li>Cart: <span>0</span></li> */}
        
           
        // </nav>
    )
}

export default navbar;
