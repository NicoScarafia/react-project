import React from 'react'
import Contador from './Contador'
import OnlineStatus from './OnlineStatus'


const App = () => {

  let nombre = 'Nico'

  const claseBS = {
    primary: "text-primary",
    danger: "text-danger"
  }

  const deportes = ["⚽", "⛳", "🏓", "🎯", "🏈",]

  return (

    <div className="container text-center">

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
