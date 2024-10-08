import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './pages/Landingpage'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import Layout from './components/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
const App = () => {
  return (
    <div>
<Layout>
<Routes>
<Route path='/' element={<Landingpage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/profile' element={<Profile/>}></Route>
<Route path='/product' element={<Product/>}></Route>
<Route path='/product/:id' element={<ProductDetail/>}></Route>

</Routes>
</Layout>
<ToastContainer/>
    </div>
  )
}

export default App
