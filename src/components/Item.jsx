import React from 'react'
import { Link } from 'react-router-dom'
import ItemCompra from './ItemCompra'

const Item = ({ comic }) => {

  const { nombre, cover, stock, precio, categoria, id } = comic

  return (

    <div className='comic-card'>

      <div className='img-div'><img src={cover} alt={`Cover de ${nombre}`} /></div>
      
      <small className='category'>{categoria}</small>
      <h5>{nombre}</h5>
      <p>Precio: ${precio}</p>

      <ItemCompra comic={comic} initialCompra={1} />

      <div className='mt-3'>
        <button
          className={stock > 0 ? 'btn btn-sm btn-success' : 'btn btn-sm btn-danger'}
        >
          {stock > 0 ? 'Comprar' : 'Sin stock'}
        </button>
      </div>

      <Link to={`/detail/${id}`}>
        <button className='btn btn-sm btn-primary mt-2'>Ver más</button>
      </Link>

    </div>

  )
}

export default Item