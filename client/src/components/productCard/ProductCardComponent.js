import React from 'react'
import ProductImage from './ProductImageComponent'
import {Link} from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className = "productCard">
            <ProductImage img = {props.imgProduct} /> 
            <p className = "text"> {props.name} </p>
            <button className = "button"><Link to = {`/product/${props.type}`}>SHOP NOW</Link></button>
        </div>
    )
}

export default ProductCard