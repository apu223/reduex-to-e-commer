import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Cart from './page/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/cart' element={<Cart/>}>Home</Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App