import React from 'react'
import Image from '../../../images'


const productImage = (props) => {
    return (
        <div className = "productImage">
            <Image img = {props.img} class = "productImg"/>
        </div>
    )
}

export default productImage