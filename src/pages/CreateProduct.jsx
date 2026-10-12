import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function CreateProduct() {
  const [formDate, setFormDate]= useState({
    title:"", description:"", category:"", price:"", quantity:"", createdAt:"", updatedAt:""
  })

  function handleChange(event){
    setFormDate({...formDate,[event.target.name]:event.target.value})

  }

  async function handleSubmit(event){
    event.preventDefault()
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, formDate)
    navigate("/products")
  }

  const navigate = useNavigate() 
  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
        type="text"
        onChange={handleChange}
        value={formDate.title}
        name='title'
        id='title'
        />
        <label htmlFor="description">Description:</label>
        <input 
        type="text"
        onChange={handleChange}
        value={formDate.description}
        name='description'
        id='description'
        />
        <label htmlFor="category">Category:</label>
        <input 
        type="text"
        onChange={handleChange}
        value={formDate.category}
        name='category'
        id='category'
        />
        <label htmlFor="price">price:</label>
        <input 
        type="text"
        onChange={handleChange}
        value={formDate.price}
        name='price'
        id='price'
        />
        <label htmlFor="quantity">Quantity:</label>
        <input 
        type="text"
        onChange={handleChange}
        value={formDate.quantity}
        name='quantity'
        id='quantity'
        />
        <label htmlFor="createdAt">Created At:</label>
        <input 
        type="text"
        onChange={handleChange}
        value={formDate.createdAt}
        name='createdAt'
        id='createdAt'
        />
        <label htmlFor="updatedAt">Updated At:</label>
        <input 
        type="text"
        onChange={handleChange}
        value={formDate.updatedAt}
        name='updatedAt'
        id='updatedAt'
        />

        <button>Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct
