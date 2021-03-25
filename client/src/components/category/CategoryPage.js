import {useState, useEffect} from 'react'
import Image from '../img/Image'
import { Redirect } from 'react-router'

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
          }, [])

        return (
            <div className = "cardCointainer">
            {products.map((product,index) => {
                return (
                    <div className = "cardCategory" key = {index}>
                    <Image img = {Product.img} class = "productImg"/>
                    <p className ="name">{Product.name}</p>
                    <p className = "text">£{Product.price}</p>
                    <button onClick = {() => setViewProduct(product._id)} className = "button">MORE INFO</button>
                    {viewProduct? <Redirect to={{pathname: "/product/individual", state: {productID: viewProduct}}}/>:null}
                    </div>        
                )
            })}
            </div>
        )
    }


export default Category