import {useState, useEffect} from 'react'
import Image from '../img/Image'
import {Link} from 'react-router-dom'

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

      const addToCart = () => {
          let basket = localStorage.getItem('basket')
            //retrieve local storage
          if (basket) {
                // if a basket exists increase the quantity of the product in the basket
            basket = JSON.parse(basket)
                // split object to access key/values inside
                // find out if the product already exists in the basket - 
                if (basket.hasOwnProperty(product._id)) {          
                basket[product._id].quantity ++
                //if it doesn't exist, create a new instance in the basket
                } else {
                    basket[product._id] = {
                    image: product.img,
                    name: product.name, 
                    quantity: 1, 
                    price: product.price
                }
            }
            // if no basket exists, create a new instance of basket
            } else {
            basket = {
                  [product._id]: {
                    image: product.img,
                    name: product.name, 
                    quantity: 1, 
                    price: product.price}
                  }
        
          }

          localStorage.setItem('basket', JSON.stringify(basket))
        }

      return (
        <div className = "item">
                <div className = "item1">
                <Image img = {product.img} class = "productImg"/>    
                <p className = "text"> {product.name}</p>       
                <p className = "name2"> {product.description}</p>
                </div>
                <div className = "item1.1">
                <p className = "name">£{product.price}</p>
                <button onClick = {addToCart} className = "button2"><Link to = {'/cart'}>ADD TO CART</Link></button>
                <image src = "/images/PayPal.png" alt = "PayPal"/>
                </div>        
        </div>
    )
}

//

export default Items