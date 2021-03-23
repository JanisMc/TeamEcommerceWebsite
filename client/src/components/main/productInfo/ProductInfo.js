import React from 'react'

const productInfo = (props) => {
    return (
        <div className = "productInfo">
            <ProductImage img = {props.imgProduct} /> 
            <p> {props.info} </p>
            <button> BUY IT </button>
        </div>
    )
}

export default productInfo