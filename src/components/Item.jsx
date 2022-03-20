import React from 'react'
import ItemCompra from './ItemCompra'

const Item = ({ comic }) => {

  const { nombre, cover, stock, precio } = comic

  return (

    <div className='comic-card'>

      <div className='img-div'><img src={cover} alt={`Cover de ${nombre}`} /></div>
      <h5>{nombre}</h5>
      <p>Precio: ${precio}</p>

      <ItemCompra comic={comic} initialCompra={1} />

      <div className='mt-3'>
        <button
          className={stock > 0 ? 'btn btn-success' : 'btn btn-danger'}
        >
          {stock > 0 ? 'Comprar' : 'Sin stock'}
        </button>
      </div>

    </div>

  )
}

export default Item