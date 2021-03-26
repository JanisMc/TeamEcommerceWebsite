import {useState, useEffect} from 'react'
import Image from '../img/Image'


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

      return (
        <div className = "item">
                <div className = "item1">
                <Image img = {product.img} class = "productImg"/>    
                <p className = "text"> {product.name}</p>       
                <p className = "name2"> {product.description}</p>
                </div>
                <div className = "item11">
                <p className = "name"> £{product.price}</p>
                <button className = "button2"> ADD TO CART </button>
                <image src = "/images/PayPal.png" alt = "PayPal"/>
                </div>        
        </div>
    )
}


export default Items