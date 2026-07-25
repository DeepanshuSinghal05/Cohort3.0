import React from 'react'
import { Route, Routes } from 'react-router'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/' element = {<Login/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/shop' element = {<Shop/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/detail/:id' element = {<ProductDetail/>}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
