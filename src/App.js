import React from 'react';
import './App.css';
import ProductCard from './Components/Product-card';
import Navbar from './Components/Nav';
import Cart from './Components/Cart';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideCart from './Components/SideCart';
import DashBoard from './Components/DashBoard';


function App() {
  const [showCart, setShowCart] = useState(false);
  const [showHome, setshowHome] = useState(true);
  
  
  const toggle = () => {
    if (showCart === false) {
      setShowCart(true);
      setshowHome(true)
    }
    else {
      setShowCart(false);
    }
    // console.log("hello");
  }
  return (
    <BrowserRouter>
      <Navbar onClick={toggle} />
      {/* {showCart ? <Cart></Cart> : <ProductCard></ProductCard>} */}
     {showHome ? <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes> : <></>
      }
      {showCart ? <SideCart onClick={toggle}/> : <></>}
    </BrowserRouter>
  );
}

export default App;
