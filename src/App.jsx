import { Route, Routes } from "react-router"

import Navbar from "./components/Navbar"
import CreateProduct from "./pages/CreateProduct"
import ProductDetails from "./pages/ProductDetails"
import ProductsList from "./pages/ProductList"
import HomePage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>


    </div>
  )
}

export default App
