import {useState, useEffect} from 'react'
import Image from '../img/Image'

const Category = (props) => {

    const [Products, setProducts] = useState([])
        
        useEffect(() => {
            console.log ("hello")
            getProductByType()
          }, [])

    const getProductByType = () => {
        fetch(`http://localhost:3001/products/${props.type}`)
        .then(res => res.json())
        .then(res => {console.log(res); setProducts(res.data)})
    }

        return (
            <div className = "cardCointainer">
            {Products.map((Product,index) => {
                return (
                    <div className = "cardCategory" key = {index}>
                    <Image img = {Product.img} class = "productImg"/>
                    <p className ="name">{Product.name}</p>
                    <p className = "text">£{Product.price}</p>
                    <button className = "button"> MORE INFO</button>
                    </div>        
                )
            })}
            </div>
        )
    }


export default Category