import React from 'react'
import './Home.css';
import ProductCard from './main/productCard/ProductCard'
import navbar from '../components/navbar'

const home = () => {
    return (
        <div className="App">
            <Navbar/>
            
            <Main/>

            <ProductCard imgProduct = "LaptopPreview" name = "Laptop"/>
            <ProductCard imgProduct = "DesktopPreview" name = "Desktop"/>
            <ProductCard imgProduct = "MobilesPreview" name = "Mobiles"/>
            <ProductCard imgProduct = "SmartWatchesPreview" name = "Smartwatches"/>
            <ProductCard imgProduct = "AccessoriesPreview" name = "Accesories"/>
            
           
            <Footer/>
      
        </div>
    );
}

export default home