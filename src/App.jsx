import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Componentes
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Locales from './components/Locales';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import Error404 from './components/Error404';
import Cart from './components/Cart';


const App = () => {

  return (

    <div className='App'>
      <BrowserRouter>

        <Navbar />


        <Routes>

          <Route path="/" element={<ItemListContainer titulo="Productos destacados" />} />

          <Route path="/categoria/:categoryId" element={
            <ItemListContainer titulo="Productos destacados" />}
          />

          <Route path="detail/:itemId" element={<ItemDetailContainer />} />

          <Route path="/locales" element={<Locales />} />
          <Route path="/acerca-de" element={<AcercaDeNosotros />} />
          <Route path="/cart" element={<Cart />} />  
          <Route path="*" element={<Error404 />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>

  )
}

export default App;
