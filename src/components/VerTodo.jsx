import React from 'react'
import { Link } from 'react-router-dom'
// Estilos 
import '../styles/VerTodo.scss'

const VerTodo = () => {
  return (
    <div className='vertodo-container'>

      <h2>Catálogo</h2>

      <div className='vertodo-info'>
        <img className='superman2-img no-select' src='../../assets/img/decorativas/superman-flying.png' alt='Imagen decorativa de Superman'/>
        <div className='link'>
          <Link to='/productos'>Ver todo el catálogo</Link>
        </div>
        <img className='batman-img no-select' src='../../assets/img/decorativas/batman.png' alt='Imagen decorativa de Batman' />
      </div>

    </div>
  )
}

export default VerTodo