import React from 'react'
import ProductCard from '../productCard/ProductCardComponent'
// import {useState, useEffect} from 'react'
// import Image from '../img/Image'
// import { Redirect } from 'react-router'
// import {Link} from 'react-router-dom'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'


const Home = (props) => {
    
    return (
        <>
        <div>
            <Banner/>
        </div>
        <div className="cardCointainer">
                <ProductCard type = "laptop" imgProduct = "LaptopPreview" name = "Laptops"/>
                <ProductCard type = "desktop" imgProduct = "DesktopPreview" name = "Desktops"/>
                <ProductCard type = "mobile" imgProduct = "MobilesPreview" name = "Mobiles"/>
                <ProductCard type = "smartwatch" imgProduct = "SmartwatchesPreview" name = "Smartwatches"/>
                <ProductCard type = "accessories" imgProduct = "AccessoriesPreview" name = "Accessories"/>       
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}

export default Home