import React, { useContext, useState } from 'react'
// Sweet Alert
import Swal from 'sweetalert2'
// Context
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
// RouterDom
import { Navigate, useNavigate } from 'react-router-dom'
// Firebase
import { addDoc, collection, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
// Estilos
import '../styles/Checkout.scss'
import '../styles/UserForm.scss'
// Componentes
import BotonesHomeNavigation from './BotonesHomeNavigation'
import InicioSesion from './InicioSesion'



const Checkout = () => {

  const { cart, cartTotal, vaciarCarrito, eliminarElemento } = useContext(CartContext)
  const { currentUser, handleLogOut } = useContext(AuthContext)


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

  const updateDatabase = async (orden) => {

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
      addDoc(ordersRef, { orden })
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

      outOfStock.forEach(item => {
        eliminarElemento(item.nombre)
      })

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

  const compraUsuario = async () => {
    if (currentUser) {
      const comprador = currentUser.email
      const orden = {
        items: cart,
        total: cartTotal(),
        fecha: Timestamp.fromDate(new Date()),
        comprador: { comprador }
      }
      await updateDatabase(orden)
    }
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
      await updateDatabase(orden)
    }
  }

  const [errorMsg, setErrorMsg] = useState(false)

  const navigate = useNavigate()
  const handleNavigate = () => { navigate(-1) }




  if (cart.length === 0) {
    return <Navigate to='/' />
  }


  if (currentUser) {
    return (
      <div className="current-container">

        <h2>CHECKOUT</h2>

        <h4>Registrado como:</h4>

        <div className='card user'>
          <img src="../../assets/img/decorativas/user-account.png" alt="" />
          <p>{currentUser.email}</p>
          <div><button onClick={handleLogOut} className='btn btn-outline-danger btn-sm'>Cerrar sesión</button></div>
        </div>

        <button onClick={compraUsuario} className="btn btn-success">
          Finalizar compra
        </button>

      </div>
    )
  }



  return (

    <div className='checkout-container'>

      <h2>CHECKOUT</h2>

      <div className='d-flex justify-content-center'>

        <div className='mx-5' style={{ maxWidth: '40rem' }}>
          <p>Accedé a tu cuenta</p>
          <InicioSesion />
        </div>

        <div className='mx-5' style={{ maxWidth: '40rem' }} >
          <p>Continuá como invitado</p>


          <form onSubmit={handleSubmit} style={{ minHeight: '12rem' }} className='form-control d-flex flex-column justify-content-around'>

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
              <button type='submit' className='btn btn-sm btn-success my-3'>Finalizar compra</button>
            </div>

          </form>
        </div>
      </div>

      <BotonesHomeNavigation />

    </div>
  )
}

export default Checkout