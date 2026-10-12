import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router"
function ProductList() {
  const [products, serProducts] = useState([])

  async function getAllProducts(){
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    serProducts(response.data)

  }
  useEffect(()=>{
    getAllProducts()
  },[])


  return (
    <div>
      <h1>All Products</h1>

      {products.map((oneProduct)=>
        <div key={oneProduct._id}>
          <h2>Title: {oneProduct.title}</h2>
          <p>Description: {oneProduct.description}</p>
          <p>Category: {oneProduct.category}</p>
          <p>Quantity: {oneProduct.quantity}</p>
          <p>CreatedAt: {oneProduct.createdAt}</p>
          <p>UpdatedAt: {oneProduct.updatedAt}</p>

          <Link to={`/products/${oneProduct._id}`}>Details</Link>

        </div>
      )}
    </div>
  )
}

export default ProductList
