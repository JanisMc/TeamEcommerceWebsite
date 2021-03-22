import React from 'react'
import './productCard.css'
import ProductImage from 

const productCard = (props) => {
    return (
        <div className = "productCard">
            <ProductImage img = {props.imgProduct} /> 
            <p> {props.name} </p>
            <button> SHOP NOW </button>
        </div>
    )
}

export default Card