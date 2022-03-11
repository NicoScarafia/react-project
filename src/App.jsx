import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Componentes
import Contador from './components/Contador'
import Navbar from './components/Navbar'

import Props from './components/Props';
import ComicIssue from './components/ComicIssue';


const App = () => {

  let nombre = 'Nico'

  const claseBS = {
    primary: "text-primary",
    danger: "text-danger",
    yellow: "text-warning"
  }

  const deportes = ["⚽", "⛳", "🏓", "🎯", "🏈",]

  const comic = [
    {
      nombre: 'Batman - Under the Hood',
      cover: 'assets/img/batman.under-hood.jpg',
      stock: 3,
    },
    {
      nombre: 'Superman - Red Son',
      cover: 'assets/img/superman.red-son.jpg',
      stock: 1,
    },
    {
      nombre: 'Dorohedoro - Volumen 1',
      cover: 'assets/img/dorohedoro.1.webp',
      stock: 0,
    },
    {
      nombre: 'V de Vendetta',
      cover: 'assets/img/v.jpg',
      stock: 6,
    }
  ]

  return (

    <div className="text-center">

      <Navbar />

      <h1 className={claseBS.yellow}>OMG CÓMICS!</h1>

      <div className='mt-5'>
        <Props user="Nicolás" />
        <Props user="Laura" />
        <Props user="Usuario" />
      </div>

      <div id='novedades' className='mt-5'>
        <hr />
        <h2 className='p-4'>NOVEDADES</h2>
        <div className='d-flex justify-content-center pb-4'>
          <ComicIssue comic={comic[0]} />
          <ComicIssue comic={comic[1]} />
          <ComicIssue comic={comic[2]} />
          <ComicIssue comic={comic[3]} />
        </div>
      </div>

      <hr />

      <div className='mt-5'>

        <h4>Deportes</h4>
        <ol className='d-flex justify-content-center'>
          {
            deportes.map(e => (
              <li className='m-3' key={e}>{e}</li>
            ))
          }
        </ol>
      </div>

      <Contador />

      <br />
      <br />
      <br />



    </div>
  )
}

export default App;
