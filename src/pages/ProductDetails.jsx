import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from 'axios'

function ProductDetails() {
  const [product, setProducts] = useState(null)
  const {productId} = useParams()

  async function getProduct(){
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
    setProducts(response.data)
  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      <h1>Student Details</h1>

      {product ? (<>
        <h2>Title: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Created At: {product.createdAt}</p>
        <p>Updated At: {product.updatedAt}</p>

      </>) : <h2>Loading...</h2>}
    </div>
  )
}

export default ProductDetails
