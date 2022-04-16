import React, { useContext, useState } from 'react'
// Sweet Alert
import Swal from 'sweetalert2'
// Context
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
// RouterDom
import { Navigate, useNavigate, Link } from 'react-router-dom'
// Firebase
import { addDoc, doc, collection, getDoc, Timestamp, updateDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
// Estilos
import '../styles/Checkout.scss'
import BotonesHomeNavigation from './BotonesHomeNavigation'



const Checkout = () => {

  const { cart, cartTotal, vaciarCarrito, eliminarElemento } = useContext(CartContext)
  const { currentUser } = useContext(AuthContext)


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

  const handleSubmit = async (e) => {
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

      // actualiza el stock de la base de datos
      const batch = writeBatch(db)
      const ordersRef = collection(db, 'ordenes')
      const productosRef = collection(db, 'productos')

      const q = query(productosRef, where(documentId(), 'in', cart.map((item) => item.id)))

      const productos = await getDocs(q)

      const outOfStock = []

      productos.docs.forEach((doc) => {
        const itemInCart = cart.find((item) => item.id === doc.id)

        if (doc.data().stock >= itemInCart.compra) {
          batch.update(doc.ref, {
            stock: doc.data().stock - itemInCart.compra
          })
        } else {
          outOfStock.push(itemInCart)
        }
      })

      if (outOfStock.length === 0) {
        batch.commit()
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

      else {
        const itemSinStock = outOfStock.map(item => item.nombre)
        console.log(outOfStock.length)
 
        // outOfStock.forEach(item => {
        //   eliminarElemento(item.nombre)
        // })

        // for (let i = 0; i < outOfStock.length; i++) {
        //   eliminarElemento(outOfStock[i].nombre)
        // }

        Swal.fire({
          html: `No hay stock disponible para los siguientes items de tu carrito: <br> <b>${itemSinStock.join(`<br/>`)}</b> <br /> <br />
          Para continuar, modifique las cantidades seleccionadas.`,
          icon: 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'indianred',
        })
        .then((result) => {
          if (result.isConfirmed) {
            handleNavigate()
          }
        })
      }
    }
  }

  const [errorMsg, setErrorMsg] = useState(false)

  const navigate = useNavigate()
  const handleNavigate = () => { navigate(-1) }


  

  if (cart.length === 0) {
    return <Navigate to='/' />
  }

  return (

    <div className='checkout-container'>

      <h2>CHECKOUT</h2>

      {
        currentUser &&  <p>Logged in as: {currentUser.email}</p>
      }

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
            errorMsg && <small><i className="bi bi-x-lg"></i> Campo obligatorio</small>
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

      <BotonesHomeNavigation />

    </div>
  )
}

export default Checkout