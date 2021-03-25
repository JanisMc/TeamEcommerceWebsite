import {useState, useEffect} from 'react'
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
            <>
            {products.map((product,index) => {
                return (
                    <div className = "cards" key = {index}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick = {() => setViewProduct(product._id)} className = "button">MORE INFO</button>
                    {viewProduct? <Redirect to={{pathname: "/product/individual", state: {productID: viewProduct}}}/>:null}
                    </div>        
                )
            })}
            </>
        )
    }


export default Category