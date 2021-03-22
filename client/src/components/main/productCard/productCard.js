import React from 'react'
import './productCard.css'
import ProductImage from '../productImage/productImage'

const ProductCard = (props) => {
    return (
        <div className = "productCard">
            <ProductImage img = {props.imgProduct} /> 
            <p> {props.name} </p>
            <button> SHOP NOW </button>
        </div>
    )
}

export default ProductCard