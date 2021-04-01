import React from 'react'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className = "checkoutContainer">
        <div className = "checkoutC">
        <form className>
        <p>Title: <input type="text"/></p>
        <p>Name: <input type="text"/></p>
        <p>Surname: <input type="text"/></p>
        <p>Email: <input type="text"/></p>
        <p>Phone Number: <input type="text"/></p>
        <p>Address: <input type="text"/></p>
        <p>Town: <input type="text"/></p>
        <p>County: <input type="text"/></p>
        <p>Post Code: <input type="text"/></p>
        <p>Country: <input type="text"/></p>
        <div className = "paymentContainer">
        <p>Name on Card: <input type="text"/></p>
        <p>Card Number: <input type="text"/></p>
        <p>Expiry Date: <input type="text"/></p>
        <p>CCV Number: <input type="text"/></p>
        </div>
        <input class = "submit" type="submit" value = "Submit"/>
        </form>
        </div>
        </div>
    )
}

export default Checkout