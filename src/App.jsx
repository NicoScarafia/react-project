import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomCartProvider } from './context/CartContext';
import { AuthContextProvider } from './context/AuthContext';
// Estilos
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// Componentes
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import Checkout from './components/Checkout';
// Pages
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import NavbarMobile from './components/NavbarMobile';
import Header from './components/Header';


const App = () => {

  return (

    <div className="App">
      <CustomCartProvider>
        <AuthContextProvider>

          <BrowserRouter>

            <Header />
            {/* <Navbar /> */}
            {/* <NavbarMobile /> */}

            <Routes>

              <Route path="/" element={<HomePage />} />
              <Route path="/productos" element={<ItemListContainer />} />

              <Route path="/user" element={<UserPage />} />

              <Route path="/productos/:categoryId" element={<ItemListContainer />} />

              <Route path="detail/:itemId" element={<ItemDetailContainer />} />

              <Route path="/acerca-de" element={<AcercaDeNosotros />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="*" element={<Error404 />} />

            </Routes>

            <Footer />

          </BrowserRouter>
        </AuthContextProvider>
      </CustomCartProvider>
    </div>

  )
}

export default App;
