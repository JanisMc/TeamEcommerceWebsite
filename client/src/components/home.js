import React from 'react'
import './Home.css';
import ProductCard from '../components/main/productCard/productCard'
import navbar from '../components/navbar'

const App = () => {
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

export default App