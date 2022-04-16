import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomCartProvider } from './context/CartContext';
import { AuthContextProvider } from './context/AuthContext';
// Estilos
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// Componentes
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import Locales from './components/Locales';
import AcercaDeNosotros from './components/AcercaDeNosotros';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import Checkout from './components/Checkout';
import HomePage from './pages/HomePage';
import LogInRegister from './pages/LogInRegister';


const App = () => {



  return (

    <CustomCartProvider>
      <AuthContextProvider>
      <div className='App'>

        <BrowserRouter>
        
          <Navbar />

          <Routes>

            {/* <Route path="/" element={<ItemListContainer titulo="Productos destacados" />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ItemListContainer />} />

            <Route path="/user" element={<LogInRegister />} />

            <Route path="/productos/:categoryId" element={ <ItemListContainer />}      />

            <Route path="detail/:itemId" element={<ItemDetailContainer />} />

            <Route path="/locales" element={<Locales />} />
            <Route path="/acerca-de" element={<AcercaDeNosotros />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<Error404 />} />

          </Routes>

          <Footer />

        </BrowserRouter>

      </div>
      </AuthContextProvider>
    </CustomCartProvider>

  )
}

export default App;
