import React, { useContext, useState } from 'react'
// Sweet Alert
import Swal from 'sweetalert2'
// Estilos
import '../styles/Checkout.scss'
import '../styles/UserForm.scss'
// Context
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
// RouterDom
import { Navigate, useNavigate } from 'react-router-dom'
// Firebase
import { addDoc, collection, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
// Componentes
import BotonesHomeNavigation from './BotonesHomeNavigation'
import InicioSesion from './InicioSesion'
import CheckoutForm from './CheckoutForm'



const Checkout = () => {

  const { cart, cartTotal, vaciarCarrito } = useContext(CartContext)
  const { currentUser, handleLogOut } = useContext(AuthContext)

  const [values, setValues] = useState({
    nombre: '',
    email: '',
    emailconfirm: '',
    tel: ''
  })

  const [comprando, setComprando] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const updateDatabase = async (orden) => {

    setComprando(true)

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
          Swal.fire({
            title: 'Compra realizada',
            html: `Tu compra ha sido realizada con éxito. Muchas gracias! <br>&#128516; <br> <br> <b>ID de orden: ${doc.id}</b>`,
            icon: 'success',
            confirmButtonText: 'Confirmar',
            confirmButtonColor: 'seagreen',
          })
        })
        .catch((err) => { console.log(err) })
        .finally(() => vaciarCarrito())
    }

    else {
      vaciarCarrito()

      const itemSinStock = outOfStock.map(item => item.nombre)
      Swal.fire({
        html: `No hay stock disponible para los siguientes items de tu carrito: <br> <b>${itemSinStock.join(`<br/>`)}</b> <br /> <br />
        Para continuar, modifique las cantidades seleccionadas e intente nuevamente.`,
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
      const orden = {
        items: cart,
        total: cartTotal(),
        fecha: Timestamp.fromDate(new Date()),
        comprador: currentUser.email
      }
      await updateDatabase(orden)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (values.nombre === '' || values.email === '') {
      setErrorMsg(true)
    }

    if (values.email !== values.emailconfirm) {
      setDifferentEmail(true)
    }

    if (values.nombre !== '' && values.email !== '' && values.email === values.emailconfirm) {
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
  const [differentEmail, setDifferentEmail] = useState(false)

  const navigate = useNavigate()
  const handleNavigate = () => { navigate(-1) }




  if (cart.length === 0) {
    return <Navigate to='/' />
  }


  if (currentUser) {
    return (
      <div className="current-container container">

        <h2>CHECKOUT</h2>

        <h4>Registrado como:</h4>

        <div className='card user'>
          <img src="../../assets/img/decorativas/user-account.png" alt="Imagen de perfil genérica" />
          <p>{currentUser.email}</p>
          <div><button onClick={handleLogOut} className='btn btn-outline-danger btn-sm'>Cerrar sesión</button></div>
        </div>

        <button
          onClick={compraUsuario}
          disabled={comprando}
          className="btn btn-success"
        >
          Finalizar compra
        </button>

      </div>
    )
  }



  return (

    <div className='checkout-container'>

      <h2>CHECKOUT</h2>

      <div className='checkout-options'>

        <div className='mx-5'>
          <p>Accedé a tu cuenta</p>
          <InicioSesion />
        </div>

        <div className='mx-5 d-flex flex-column align-items-center' style={{ maxWidth: '40rem' }} >
          <p>Continuá como invitado</p>
          <CheckoutForm 
            props = {
              { handleSubmit, handleChange, values, errorMsg, differentEmail, comprando }
            }
          />
          
        </div>
      </div>

      <BotonesHomeNavigation />

    </div>
  )
}

export default Checkout