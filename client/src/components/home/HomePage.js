import React from 'react'
import ProductCard from '../main/productCard/ProductCardComponent'
// import './Home.css';


const Home = () => {
    return (
        <div className="cardCointainer">
            
            <ProductCard imgProduct = "LaptopPreview" name = "Laptops"/>
            <ProductCard imgProduct = "DesktopPreview" name = "Desktops"/>
            <ProductCard imgProduct = "MobilesPreview" name = "Mobiles"/>
            <ProductCard imgProduct = "SmartwatchesPreview" name = "Smartwatches"/>
            <ProductCard imgProduct = "AccessoriesPreview" name = "Accessories"/>
            
           
            {/* <Footer/> */}
      
        </div>
    );
}

export default Home