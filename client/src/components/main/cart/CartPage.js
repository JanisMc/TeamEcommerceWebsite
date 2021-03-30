import React from 'react'
import Image from '../../img/Image'

    const Cart = () => {

        let basket = localStorage.getItem('basket')
        basket = JSON.parse(basket)

    return (
        <div className = "cartContainer">
        {Object.entries(basket).map(([key, value]) => {console.log(value)
            return (
        
        <div className="cart">

            <div className="productImg2">
                <Image img= {value.img} class="product" />
            </div>
            <div className="divCart1">
                <h2>Name</h2>
                <h2>{value.name}</h2>
            </div>
            <div className="divCart2">
                <h2>Quantity</h2>
                <p>{value.quantity}</p>
            </div>
            <div className="divCart2">
                <h2>Price</h2>
                <p>{value.price}</p>
            </div>
        </div>
   
        )})}
        <div className="checkout">
            <div className="checkout1">
                <h2>CHECKOUT</h2>
            </div>
            <div className="info">
                <h2>Total</h2>
            </div>
            <div className="amount">
                <h2>xxxx $</h2>
            </div>
            <div className="buyNow">
            </div>
                <button className="buyNowButton">BUY NOW</button>
            </div>
        </div>
    )
    }
export default Cart