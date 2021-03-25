import React from 'react'
import './ProductCard.css'
import ProductImage from './ProductImageComponent'

const ProductCard = (props) => {
    return (
        <div className = "productCard">
            <ProductImage img = {props.imgProduct} /> 
            <p className = "text"> {props.name} </p>
            <button className = "button"> SHOP NOW </button>
        </div>
    )
}

export default ProductCard