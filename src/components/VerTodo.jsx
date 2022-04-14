import React from 'react'
import { Link } from 'react-router-dom'
// Estilos 
import '../styles/VerTodo.scss'

const VerTodo = () => {
  return (
    <div className='vertodo-container'>

      <h2>Catálogo</h2>

      <div className='vertodo-info'>
        <img className='superman2-img' src='../../assets/img/decorativas/superman-flying.png' />
        <div className='link'>
          <Link to='/productos'>Ver todo el catálogo</Link>
        </div>
        <img className='batman-img' src='../../assets/img/decorativas/batman.png' />
      </div>

    </div>
  )
}

export default VerTodo