import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ stock = 5, compra, setCompra, agregarAlCarrito }) => {


    const sumar = () => {
        compra < stock && setCompra(compra + 1)
    }

    const restar = () => {
        compra > 1 && setCompra(compra - 1)
    }


    return (

        <>
            {
                stock === 0 ?

                    <button className='mt-3 btn btn-sm btn-danger'>Sin stock</button>
                    
                    :

                    <div className='mt-1'>

                        <button onClick={restar} className='btn btn-sm btn-outline-success'>-</button>
                        <span className='mx-2'>{compra}</span>
                        <button onClick={sumar} className='btn btn-sm btn-outline-success'>+</button>

                        <div>
                            <button onClick={agregarAlCarrito} className='my-2 btn btn-sm btn-success'>Agregar al carrito</button>
                        </div>
                        <Link to="/cart"> 
                            <button className='btn btn-sm btn-primary'>Terminar compra</button>
                        </Link>
                    </div>
            }
        </>


    )
}

export default ItemCount