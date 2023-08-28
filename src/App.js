import React from 'react';
import './App.css';
import ProductCard from './Components/Product-card';
import Navbar from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductCard/>
    </div>
  );
}

export default App;
