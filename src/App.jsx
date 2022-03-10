import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Componentes
import Contador from './components/Contador'
import Navbar from './components/Navbar'
import OnlineStatus from './components/OnlineStatus'


const App = () => {

  let nombre = 'Nico'

  const claseBS = {
    primary: "text-primary",
    danger: "text-danger"
  }

  const deportes = ["⚽", "⛳", "🏓", "🎯", "🏈",]

  return (

    <div className="text-center">

      <Navbar />

      <h1 className={claseBS.primary}>REACT JS - PRIMERA CLASE</h1>

      <div>Hola {nombre}!</div>

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

      <OnlineStatus />

    </div>
  )
}

export default App;
