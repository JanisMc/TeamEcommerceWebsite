import React from 'react'
import ProductCard from './main/productCard/ProductCard'
// import './Home.css';


const Home = () => {
    return (
        <div className="App">
            

            <ProductCard imgProduct = "LaptopPreview" name = "Laptop"/>
            <ProductCard imgProduct = "DesktopPreview" name = "Desktop"/>
            <ProductCard imgProduct = "MobilesPreview" name = "Mobiles"/>
            <ProductCard imgProduct = "SmartWatchesPreview" name = "Smartwatches"/>
            <ProductCard imgProduct = "AccessoriesPreview" name = "Accesories"/>
            
           
            {/* <Footer/> */}
      
        </div>
    );
}

export default Home