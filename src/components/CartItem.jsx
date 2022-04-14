import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ item }) => {

    const { nombre, cover, compra, precio, stock } = item

    const { aumentarCantidad, disminuirCantidad, eliminarElemento } = useContext(CartContext)

    const [editar, setEditar] = useState(false)
    const handleEditar = () => {
        !editar ? setEditar(true) : setEditar(false)
    }


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

                    {
                        !editar ?
                            <button
                                onClick={handleEditar} className='btn mx-1 btn-sm btn-warning'><i className="bi bi-pen-fill" style={{marginRight: '0.3rem'}}></i>
                                Editar
                            </button>
                            :
                            <button
                                onClick={handleEditar} className='btn mx-1 btn-sm btn-success'><i className="bi bi-check-lg" style={{marginRight: '0.3rem'}}></i>
                                Realizado
                            </button>
                    }

                    {
                        editar &&
                        <div className='mt-2'>
                            <button
                                onClick={() => disminuirCantidad(nombre)} className='btn mx-1 btn-sm btn-warning'>
                                -
                            </button>

                            <span className='text-dark'>{compra} / {stock}</span>

                            <button onClick={() => aumentarCantidad(nombre)} className='btn mx-1 btn-sm btn-warning'>
                                +
                            </button>
                        </div>
                    }

                    {
                        !editar &&
                        <button onClick={() => eliminarElemento(nombre)} className='btn mx-1 btn-sm btn-danger'><i style={{marginRight: '0.3rem'}} className="bi bi-trash-fill"></i>
                            Eliminar
                        </button>
                    }
                </div>
            </div>

        </div>

    )

}

export default CartItem