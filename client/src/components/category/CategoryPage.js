import {useState, useEffect} from 'react'
import Image from '../img/Image'
import { Redirect } from 'react-router'
import './CategoryPage.css'

const Category = (props) => {

    const [products, setProducts] = useState([])

    const [viewProduct, setViewProduct] = useState(false) 

        useEffect(() => {

            const getProductByType = () => {
                fetch(`http://localhost:3001/products/${props.type}`)
                .then(res => res.json())
                .then(res => {console.log(res); setProducts(res.data)})
            }
            
            getProductByType()
          }, [props])

        return (
            <div className = "cardCointainer">
            {products.map((product,index) => {
                return (
                    <div onClick = {() => setViewProduct(product._id)} className = "cardCategory" key = {index}>
                    <Image img = {product.img} class = "productImg"/>
                    <p className ="name1">{product.name}</p>
                    <p className = "text">£{product.price}</p>
                    <button onClick = {() => setViewProduct(product._id)} className = "button">MORE INFO</button>
                    {viewProduct? <Redirect to={{pathname: "/product/individual", state: {productID: viewProduct}}}/>:null}
                    </div>        
                )
            })}
            </div>
        )
    }

export default Category