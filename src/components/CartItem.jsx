import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ item }) => {

    const { nombre, cover, compra, precio } = item

    const {eliminarElemento} = useContext(CartContext)

    return (

        <div className='cart-card'>

            <img src={cover} alt="#" />

            <div className='cart-card-right'>
                <h3>{nombre}</h3>

                <div className="cart-card-text">
                    <p>Precio por unidad: ${precio}</p>
                    <p>Unidades solicitadas: {compra}</p>
                    <span><p>TOTAL: ${precio * compra}</p></span>
                </div>

                <div className='cart-buttons'>
                    {/* <button className='btn mx-1 btn-sm btn-warning'><i className="bi bi-pen-fill"></i>Editar</button> */}
                    <button onClick={() => eliminarElemento(nombre)} className='btn mx-1 btn-sm btn-danger'><i className="bi bi-trash-fill"></i>Eliminar</button>
                </div>
            </div>

        </div>

    )

}

export default CartItem