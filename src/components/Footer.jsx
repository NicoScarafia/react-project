import React from 'react'
import { Link } from 'react-router-dom'
// Estilos
import '../styles/Footer.scss'

const Footer = () => {

  return (

    <footer>
      <p> © <span>Thrashed Comics.</span> Todos los derechos reservados.</p>
      <Link to='/about' className='btn btn-outline-dark btn-sm'><i className="bi bi-plus"></i>más info</Link>
    </footer>

  )

}

export default Footer