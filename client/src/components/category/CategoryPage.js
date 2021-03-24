import {useState, useEffect} from 'react'

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
            <>
            {Products.map((Product,index) => {
                return (
                    <div className = "cards" key = {index}>
                    <p>{Product.name}</p>
                    <p>{Product.price}</p>
                    </div>        
                )
            })}
            </>
        )
    }


export default Category