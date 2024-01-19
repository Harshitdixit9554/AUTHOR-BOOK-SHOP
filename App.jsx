import { useState } from 'react'
import "./App.css";
import { } from 'react-dom/client'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { } from 'react-dom'
import Home from './components/Home'
import Author from './components/Author'
import Items from './components/Items'
import Product from './components/Product'
import Contact from './components/Contact'
import Singup from './components/Signup'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Signin from './components/Signin'
function App() {
  const [cart, setCart] = useState([])
  const addtocart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const remove = (index) => {
    const updatedtask = [...cart];
    updatedtask.splice(index, 1)
    setCart(updatedtask)
  }
  return (
    <>

      <BrowserRouter>

        <Navbar count={cart.length} />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/Author" element={<Author />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Product" element={<Product addtocart={addtocart} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Singup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Cart" element={<Cart cart={cart} remove={remove} />} />
        </Routes>


        <Footer />
      </BrowserRouter>

    </>
  );
}
export default App;