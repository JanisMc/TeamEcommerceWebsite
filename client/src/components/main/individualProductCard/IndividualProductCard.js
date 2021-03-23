import React from 'react'

const individualProductCard = (props) => {
    return (
        <div className = "individualProductCard">
            <ProductImage img = {props.imgProduct} /> 
            <p> {props.name} </p>
            <p> {props.model} </p>
            <p> {props.price} </p>
            <button> More Info </button>
        </div>
    )
}

export default individualProductCard