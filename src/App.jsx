import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Componentes
import Navbar from './components/Navbar'
import ItemList from './components/ItemList'
import Footer from './components/Footer';


const App = () => {

  const comic = [
    {
      nombre: 'Batman - Under the Hood',
      cover: 'assets/img/batman.under-hood.jpg',
      stock: 3,
      precio: 660
    },
    {
      nombre: 'Superman - Red Son',
      cover: 'assets/img/superman.red-son.jpg',
      stock: 12,
      precio: 560
    },
    {
      nombre: 'Chainsaw Man - Volumen 1',
      cover: 'assets/img/chainsawman-1.jpg',
      stock: 8,
      precio: 320
    },
    {
      nombre: 'Sakura CC - Volumen 6',
      cover: 'assets/img/sakuracardcaptor-6.jpg',
      stock: 0,
      precio: 180
    },
    {
      nombre: 'V de Vendetta',
      cover: 'assets/img/v.jpg',
      stock: 7,
      precio: 600
    },
    {
      nombre: 'Jujutsu Kaisen - Volumen 15',
      cover: 'assets/img/jujutsukaisen-15.jpg',
      stock: 2,
      precio: 320
    },
    {
      nombre: 'Dorohedoro - Volumen 1',
      cover: 'assets/img/dorohedoro.1.webp',
      stock: 0,
      precio: 230
    },  
    {
      nombre: 'Punisher - Noir',
      cover: 'assets/img/punisher-n.jpg',
      stock: 5,
      precio: 450
    }
  ]
  
  return (
    
    <div className="text-center">

      <Navbar />

      <h2 className='novedades-titulo'>NOVEDADES</h2>

      <ItemList comic={comic} />
     
      <Footer />
    </div>
  )
}

export default App;
