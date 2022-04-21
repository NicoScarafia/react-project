import React from 'react'
import { Link } from 'react-router-dom'
// Estilos
import '../styles/Item.scss'

const Item = ({ product, showCategory = true }) => {

  const { nombre, cover, precio, categoria, id } = product

  return (
    <div key={nombre} className='product-card'>

      <div className='img-div'>
        <img src={cover} alt={`${nombre} cover`} />
      </div>

      {
        showCategory && <small className='category'>{categoria}</small>
      }

      <h4>{nombre}</h4>
      <p className='price'>${precio}</p>

      <Link to={`/detail/${id}`}>
        <i className="bi bi-box-arrow-in-right"></i> Ver más
      </Link>

    </div>
  )
}

export default Item