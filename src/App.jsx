import React from 'react'
// RouterDOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Context
import { CustomCartProvider } from './context/CartContext';
import { AuthContextProvider } from './context/AuthContext';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// Pages
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
// Componentes
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import Checkout from './components/Checkout';
import About from './components/About';


const App = () => {

  return (

    <div className="App">
      <CustomCartProvider>
        <AuthContextProvider>
          <BrowserRouter>

            <Header />

            <Routes>

              <Route path="/" element={<HomePage />} />

              <Route path="/user" element={<UserPage />} />

              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:categoryId" element={<ItemListContainer />} />
              <Route path="detail/:itemId" element={<ItemDetailContainer />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              
              <Route path="/about" element={<About />} />

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
