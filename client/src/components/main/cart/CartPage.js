import React from 'react'
import Image from '../../img/Image'

const Cart = (props) => {
    return (
        <div className = "cart">
            <div class = "productImg">
            <Image img = 'Laptop1'/>
                </div>
                <div class = "divCart1">
                <h2>Name</h2>
                <h2>Model</h2>
                    </div>
                    <div class = "divCart2">
                    <h2>Quantity</h2>
                        </div>
                        <div class = "divCart2">
                        <h2>Price</h2>  
                        </div>

        </div>



    )}

export default Cart