import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Componentes
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {

  return (
    
    <div className="text-center">

      <Navbar />
      <ItemListContainer titulo="Novedades"/>
      <ItemDetailContainer />
      <Footer />

    </div>
  )
}

export default App;
