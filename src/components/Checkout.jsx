import React, { useContext, useState } from 'react'
// Sweet Alert
import Swal from 'sweetalert2'
// Context
import { CartContext } from '../context/CartContext'
// RouterDom
import { Navigate } from 'react-router-dom'
// Firebase
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
// Estilos
import '../styles/Checkout.scss'


const Checkout = () => {

  const { cart, cartTotal, vaciarCarrito } = useContext(CartContext)

  const [values, setValues] = useState({
    nombre: '',
    email: ''
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const [errorMsg, setErrorMsg] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (values.nombre === '' || values.email === '') {
      setErrorMsg(true)
    }

    if (values.nombre !== '' && values.email !== '') {
      const orden = {
        items: cart,
        total: cartTotal(),
        fecha: Timestamp.fromDate(new Date()),
        comprador: { values }
      }

      const ordersRef = collection(db, 'ordenes')

      addDoc(ordersRef, orden)
        .then((doc) => {
          vaciarCarrito()
          Swal.fire({
            title: 'Compra realizada',
            html: `Tu compra ha sido realizada con éxito. Muchas gracias! <br>&#128516; <br> <br> <b>ID de orden: ${doc.id}</b>`,
            icon: 'success',
            confirmButtonText: 'Confirmar',
            confirmButtonColor: 'seagreen',
          })
        })
        .catch((err) => { console.log(err) })
    }
  }



  if (cart.length === 0) {
    return <Navigate to='/' />
  }

  return (

    <div className='checkout-container'>

      <h2>CHECKOUT</h2>

      <p>Ingresá tus datos para terminar la compra</p>

      <div className="container">
        <form onSubmit={handleSubmit} className="form-control bg-transparent">

          <input
            type="text"
            placeholder='Escribí tu nombre'
            className='form-control my-2'
            value={values.nombre}
            onChange={handleChange}
            name='nombre'
          />
          {
            errorMsg && 
            <small><i className="bi bi-x-lg"></i> Campo obligatorio</small>
          }

          <input type="email"
            placeholder='Escribí tu mail'
            className='form-control my-2'
            value={values.email}
            onChange={handleChange}
            name='email'
          />
          {
            errorMsg && <small><i className="bi bi-x-lg"></i> Campo obligatorio</small>
          }

          <div>
            <button type='submit' className='btn btn-success my-3'>Enviar</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Checkout