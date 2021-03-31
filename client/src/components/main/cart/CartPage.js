import React from 'react'
import Image from '../../img/Image'
import {useState, useEffect} from 'react'

    const Cart = () => {

        const [update, setUpdate] = useState(false)

        let basket = localStorage.getItem('basket') || {}
        basket = JSON.parse(basket)

    const removeFromCart = (value) => {
        let basket = localStorage.getItem('basket')
            basket = JSON.parse(basket)
            delete basket[value]
            localStorage.setItem('basket', JSON.stringify(basket))
            setUpdate(!update) 
    }

    const runningTotal = () => {
        let basket = localStorage.getItem('basket')
            basket = JSON.parse(basket) 
            let total = (0)
            Object.entries(basket).map(([key, value]) => {
                let run = (value.price * value.quantity)               
                total += run                
    })
            return total
    }

    return (
        <div className = "cartContainer">
        {Object.entries(basket).map(([key, value]) => (
        
        <div className="cart">
            
            <div className="productImg2">
                <Image img= {value.img} class="product" />
            </div>
            <div className="divCart1">
                <h2>Name:</h2>
                <h2>{value.name}</h2>
            </div>
            <div className="divCart2">
                <h2>Quantity:</h2>
                <p>{value.quantity}</p>
            </div>
            <div className="divCart2">
                <h2>Price:</h2>
                <p>{value.price}</p>
            </div>
            <div>
            <button onClick = {() => {removeFromCart(value._id)}} className ="button9">REMOVE FROM CART</button>
            </div>
        </div>
   
        ))}
        <div className="checkout">
            <div className="checkout1">
                <h2>CHECKOUT</h2>
            </div>
            <div className="info">
                <h2>Total</h2>
            </div>
            <div className="amount">
                <h2>{runningTotal()}</h2>
            </div>
            <div className="buyNow">
            </div>
                <button className="buyNowButton">BUY NOW</button>
            </div>
        </div>
    )
    }
export default Cart