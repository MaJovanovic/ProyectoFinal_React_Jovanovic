import logo from './logo.svg';
import React, { useEffect } from 'react';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import CheckOut from './components/CheckOut';
import Gracias from './components/Gracias';


import {useState } from 'react'
import CartProvider from './context/CartProvider';





function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
        </div>
        <Routes>
          <Route exact  path= "/"    element= {<ItemListContainer/>} />    
          <Route  path= "/item/:id"  element={<ItemDetailContainer/>} />
          <Route  path= "/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route  path= "/pagar" element={<CheckOut/>} />
          <Route  path= "/gracias" element={<Gracias/>} />
        </Routes>
      </BrowserRouter>  
    </CartProvider>
  );
}

export default App;
