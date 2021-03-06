import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ item }) => {

    const { nombre, cover, compra, precio, stock, id } = item

    const { aumentarCantidad, disminuirCantidad, eliminarElemento } = useContext(CartContext)

    const [editar, setEditar] = useState(false)
    const handleEditar = () => {
        !editar ? setEditar(true) : setEditar(false)
    }

    return (

        <div
            style={{ width: '500px',  maxWidth: '85%', backgroundColor: 'whitesmoke', borderRadius: '10px' }}
            className="card my-4 mx-auto text-black py-2">

            <div className="row g-0 m-2">
                <div className="col-md-4" >
                    <img src={cover} alt={`${nombre} Cover`}
                        style={{ maxHeight: '200px' }} className="img-fluid rounded"/>
                </div>
                <div className="col-md-8" >
                    <div className="card-body px-auto">
                        <h5 className="card-title fw-bold text-uppercase">
                            {nombre}
                        </h5>
                        <p className='card-text m-0'>Precio por unidad: ${precio}</p>
                        <p className='card-text m-0'>Unidades solicitadas: {compra}</p>
                        <span><p className='mt-1 fw-bold'>TOTAL: ${precio * compra}</p></span>

                        {
                            !editar

                                ?
                                <div>
                                    <button
                                        onClick={handleEditar}
                                        className='btn btn-warning btn-sm mx-2'>
                                        <i className="bi bi-pen-fill"></i> Editar
                                    </button>

                                    <button
                                        onClick={() => eliminarElemento(id)}
                                        className='btn btn-danger btn-sm mx-2'>
                                        <i className="bi bi-trash-fill"></i> Eliminar
                                    </button>
                                </div>

                                :
                                <div className='d-flex justify-content-center'>

                                    <button
                                        onClick={() => disminuirCantidad(id)}
                                        className='btn btn-warning btn-sm mx-1'
                                    >
                                        -
                                    </button>

                                    <span style={{ width: '3rem' }} className='text-dark'>
                                        {compra} / {stock}
                                    </span>
                                    
                                    <button
                                        onClick={() => aumentarCantidad(id)}
                                        className='btn btn-warning btn-sm mx-1'
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={handleEditar}
                                        className='btn btn-sm mx-4 btn-success' >
                                        <i className="bi bi-check-lg"></i> Realizado
                                    </button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CartItem