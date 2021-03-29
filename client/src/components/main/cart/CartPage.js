import React from 'react'
import Image from '../../img/Image'
import Items from '../../individual/IndividualPage'

    const Cart = (props) => {

        // const [basketTotal, setBasketTotal] = useState (0)

        // const [runningCost, setRunningCost] = useState(0)

    

//     const addToBasket = () => {

//         let basket = {
//         id1: {name: 'Acer whatever',
//         price: 5000,
//         quantity: 9
//     },
//         id2: {name: 'Acer whatever',
//         price: 5000,
//         quantity: 9
//     }
//         }

//         this.setState ({
//             basket: this.state.basket +1
//         })
//     }

    return (
        <div className = "cartContainer">
        <div className = "cart">

            <div class = "productImg2">
            <Image img = 'Laptop1' class = "product"/>
                </div>
            <div class = "divCart1">
                <h2>Item</h2>
                <p>{Items.item}</p>
                    </div>
                    <div class = "divCart2">
                    <h2>Quantity</h2>
                    <p>{Items.quantity}</p>
                        </div>
                        <div class = "divCart2">
                        <h2>Price</h2> 
                        <p>{Items.price}</p> 
                        </div>
                        </div>
        <div className = "checkout">
            <div class= "checkout1">
                <h2>CHECKOUT</h2>
            </div>
            <div class= "info">
                <h2>Total</h2>
            </div>
                <div class= "amount">
            <h2>xxxx $</h2>
            </div>
                <div class= "buyNow"></div>
                <button class = "buyNowButton">BUY NOW</button>
        </div>
        </div>



    )
    }
export default Cart