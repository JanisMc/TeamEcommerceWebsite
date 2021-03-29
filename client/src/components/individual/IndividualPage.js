import {useState, useEffect} from 'react'
import Image from '../img/Image'
import {Link} from 'react-router-dom'
import Cart from '../main/cart/CartPage'

const Items = (props) => {

    const [product, setProduct] = useState([])

    useEffect(() => {

        const getIndividualProduct = () => {
            fetch(`http://localhost:3001/product/individual/${props.id}`)
            .then(res => res.json())
            .then(res => {console.log(res); setProduct(res.data)})
        }
        
        getIndividualProduct()
      }, [])

      const addToCart = (props) => {
          let basket
          let quantity = 0
          if (Cart) {
            basket = Cart
                if (product) {
                    quantity ++
                } 
          } else {
            basket = {
                  id: {
                      item: props.name, 
                      quantity, 
                      price: props.price}
                  }
        
                  localStorage.setItem('basket', JSON.stringify(basket))
        
                  let updatedBasket = localStorage.getItem('basket')
                  console.log('basket', JSON.parse(updatedBasket))
          }
          //if cart exists 
            //basket = cart from local
            //check if product exists in basket - 
                //increase bask quant
            //else add new to cart
          //else - create basket with added product
          //save to local
        //   let basket = {
        //   id: {
        //       item: props.name, 
        //       quantity: 0, 
        //       price: props.price}
        //   }

        //   localStorage.setItem('basket', JSON.stringify(basket))

        //   let updatedBasket = localStorage.getItem('basket')
        //   console.log('basket', JSON.parse(updatedBasket))
      }

      //store bsak local retri from locl - add product

    //     var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // // Put the object into storage
    // localStorage.setItem('testObject', JSON.stringify(testObject));

    // // Retrieve the object from storage
    // var retrievedObject = localStorage.getItem('testObject');

    // console.log('retrievedObject: ', JSON.parse(retrievedObject));

      return (
        <div className = "item">
                <div className = "item1">
                <Image img = {product.img} class = "productImg"/>    
                <p className = "text"> {product.name}</p>       
                <p className = "name2"> {product.description}</p>
                </div>
                <div className = "item1.1">
                <p className = "name">£{product.price}</p>
                <button onClick = {() => addToCart(product)} className = "button2"><Link to = {'/cart'}>ADD TO CART</Link></button>
                <image src = "/images/PayPal.png" alt = "PayPal"/>
                </div>        
        </div>
    )
}

//

export default Items