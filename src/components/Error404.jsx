import React from 'react'
import { Link } from 'react-router-dom'
// Estilos
import '../styles/Error404.scss'

const Error404 = () => {

  return (

    <div className='d-flex  flex-column align-items-center justify-content-center'>

      <img className='img-404' src="../../assets/img/decorativas/error-404.png" alt="Error 404" />

      <h2 className='not-found-title'>Página no encontrada</h2>

      <div className='d-flex justify-content-center'>
        <Link to="/"><button className='mt-4 btn btn-primary'>Ir al Home</button></Link>
      </div>


    </div>

  )
}

export default Error404