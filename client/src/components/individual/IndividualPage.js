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
        <>
                <div className = "items">
                <Image img = {product.img} class = "productImg"/>    
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                </div>        
        </>
    )
}


export default Items