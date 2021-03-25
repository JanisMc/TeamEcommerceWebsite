import {useState, useEffect} from 'react'

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
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                </div>        
        </>
    )
}


export default Items