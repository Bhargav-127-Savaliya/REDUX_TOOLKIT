import React, { createContext } from 'react';
import './App.css';
import ProductCard from './Components/Product-card';
import Navbar from './Components/Nav';
import Cart from './Components/Cart';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideCart from './Components/SideCart';
import DashBoard from './Components/DashBoard';

const data = createContext();

function App(props) {
  const [showCart, setShowCart] = useState(false);
  const [showHome, setshowHome] = useState(true);
  const [search, setSearch] = useState('');

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

  const searchhandler = (e) => {
    const val = e.target.value;
    setSearch(val.trim());
  }

  const serh = search;

  return (
    <BrowserRouter>
      <Navbar onClick={toggle} onSearch={searchhandler} />
      {/* {showCart ? <Cart></Cart> : <ProductCard></ProductCard>} */}
      {showHome ? <Routes>

        <Route path="/" element={
          <data.Provider value={serh}>
            <ProductCard />
          </data.Provider>
        } />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes> : <></>
      }
      {showCart ? <SideCart onClick={toggle} /> : <></>}
    </BrowserRouter>
  );
}

export default App;
export { data };