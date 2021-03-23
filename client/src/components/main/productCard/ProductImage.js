import React from 'react'
import Image from '../../img/Image'


const ProductImage = (props) => {
    return (
        <div className = "productImage">
            <Image img = {props.img} class = "productImg"/>
        </div>
    )
}

export default ProductImage