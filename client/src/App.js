import './App.css';
import Home from './components/Home'
// import ProductCard from './components/main/productCard/ProductCard'
import Navbar from './components/navbar/navbar'
// import ProductsPage from './components/ProductsPage/ProductsPage'
// import {useEffect, useState} from 'react'


const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            {/* <ProductsPage/> */}
            {/* <Main/> */}
        </>
    )
} 
export default App;
//   const [products, setProducts] = useState([])
//   const[productID, setProductID] = useState('')
//   const [formData, setFormData] = useState ({
//     name: '',
//     type: '',
//     quantity: 10,
//     price: 0
//   })

//   const [updateData, setUpdateData] = useState ({
//     name: '',
//     type: '',
//     quantity: 10,
//     price: 0
//   })

//   const getHome = () => {
//     fetch('http://localhost:3001/')
//   }

//   const getProducts = () => {
//     fetch('http://localhost:3001/product/all')
//     .then(res => res.json())
//     .then(res => setProducts(res.data))
//   }

//   useEffect(() => {
//     getProducts()
//   }, [])

//   const deleteProduct = async (id) => {
//     let res = await fetch(`http://localhost:3001/product/delete/${id}`, {
//       method: 'DELETE'
//     })
//     res = await res.json()
//     console.log(res)

//     let newProducts = products.filter(product => product._id !== id)

//     setProducts(newProducts)
//   }

//   const updateProduct = async (event) => {
//     event.preventDefault()
//       let res = await fetch (`http://localhost:3001/product/update/${productID}`, {
//       method: 'PUT',
//       mode: 'cors',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(updateData)
//     })
//     console.log(await res.json)
//   }

//   const showProducts = () => {
//     if (!products){
//       return (
//         <h2>No products found</h2>
//       )
//     }

//     return (
//         products.map((product, i) => (
//           <div key = {i}>
//             <p>Name: {product.name}</p>
//             <p>Type: {product.type}</p>
//             <p>Quantity: {product.quantity}</p>
//             <p>Price: {product.price}</p>
//             <button onClick = {() => {deleteProduct(product._id)}}>Delete</button>
//             <button onClick = {() => {setProductID(product._id)}}>Update</button>
//             <hr/>
//           </div>
//         ))
//         )
//       }

//       const handleInputChange = (event) => {
//         let newObj = {
//           name: formData.name,
//           type: formData.type,
//           quantity: formData.quantity,
//           price: formData.price
//         }
    
//         newObj[event.target.name] = event.target.value
    
//         setFormData(newObj)
//       }

//       const handleUpdateChange = (event) => {
//         let newObj = {
//           name: updateData.name,
//           type: updateData.type,
//           quantity: updateData.quantity,
//           price: updateData.price
//         }
    
//         newObj[event.target.name] = event.target.value
    
//         setUpdateData(newObj)
//       }

//       const createProduct = async (event) => {
//         event.preventDefault()
//         let res = await fetch('http://localhost:3001/product/create', {
//           method: 'POST',
//           mode: 'cors',
//           headers: {
//             'content-type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         })
//         console.log(await res.json())
//       }

//       return (
//         <>
//         <h2>Create Product</h2>
//         <form onSubmit = {createProduct}>
//           Name: <input type = 'text' name = 'name' value = {formData.name} onChange = {handleInputChange}/>
//           <br/>
//           Type: <input type = 'text' name = 'type' value = {formData.type} onChange = {handleInputChange}/>
//           <br/>
//           Quantity: <input type = 'number' name = 'quantity' value = {formData.quantity} onChange = {handleInputChange}/>
//           <br/>
//           Price: <input type = 'number' name = 'price' value = {formData.price} onChange = {handleInputChange}/>
//           <br/>
//           <input type = 'submit'/>
//         </form>

//         <h2>Update Product</h2>
//     <form onSubmit = {updateProduct}>
//           Name: <input type = 'text' name = 'name' value = {updateData.name} onChange = {handleUpdateChange}/>
//           <br/>
//           Type: <input type = 'text' name = 'type' value = {updateData.type} onChange = {handleUpdateChange}/>
//           <br/>
//           Quantity: <input type = 'number' name = 'quantity' value = {updateData.quantity} onChange = {handleUpdateChange}/>
//           <br/>
//           Price: <input type = 'number' name = 'price' value = {updateData.price} onChange = {handleUpdateChange}/>
//           <br/>
//           <input type = 'submit'/>
//         </form>


//     {showProducts()}
//     </>
//   )
// }

