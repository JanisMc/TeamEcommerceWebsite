import React from 'react'
import Image from '../../img/Image'

const Cart = (props) => {
    return (
        <div className = "cartContainer">
        <div className = "cart">
            <div class = "productImg2">
            <Image img = 'Laptop1' class = "product"/>
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
        <div className = "checkout">
            <div class= "checkout1">
                <h2>CHECKOUT</h2>
            </div>
            <div class= "info">
                <h2>Total</h2>
            <h2>V.A.T</h2>
            </div>
                <div class= "amount">
            <h2>xxxx $</h2>
            </div>
                <div class= "buyNow"></div>
                <button class = "buyNowButton"> BUY NOW</button>
        </div>
        </div>



    )}

export default Cart