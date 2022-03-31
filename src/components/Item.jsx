import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ comic }) => {

  const { nombre, cover, precio, categoria, id } = comic

  return (

    <div className='comic-card'>

      <div className='img-div'><img src={cover} alt={`Cover de ${nombre}`} /></div>
      
      <small className='category'>{categoria}</small>
      <h5>{nombre}</h5>
      <p>Precio: ${precio}</p>

      <Link to={`/detail/${id}`}>
        <button className='btn btn-sm btn-primary mt-2'>Ver más</button>
      </Link>

    </div>

  )
}

export default Item