import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

// Componentes
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


const Cart = () => {

  const { cart, vaciarCarrito, cartTotal } = useContext(CartContext)


  if (cart.length === 0) {
    return (
      <div className='text-center mt-5'>
        <h2 className='fw-bold'>CARRITO DE COMPRAS</h2>
        <p>Aún no tenés productos en tu carrito</p>
        <Link to="/" ><button className='mt-5 btn btn-primary'>Ir a la Home</button></Link>
      </div>
    )
  }


  return (

    <div className='text-center mt-5'>

      <h2 className='fw-bold'>CARRITO DE COMPRAS</h2>

      <div>
        <div className='my-5'>
          {
            cart.map(item => (
              <CartItem item={item} key={item.nombre} />
            ))
          }
        </div>

        <h3 className='my-5'>TOTAL DE LA COMPRA:
          <span className='fw-bold text-warning'> ${cartTotal()}</span>
        </h3>

        <button onClick={vaciarCarrito} className='btn btn-danger'>
          <i className="bi bi-trash-fill"></i> Vaciar todo el carrito
        </button>
      </div>
    </div>

  )
}

export default Cart