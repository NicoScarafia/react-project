import React, { useState } from 'react'

const ItemCount = ({ comic }) => {

    const [compra, setCompra] = useState(0)

    const aumentarCompra = () => {
        if (comic.stock > compra) {
            setCompra(compra + 1)
        } else {
            console.log
                (`Ya alcanzaste el máximo de unidades disponibles para ${comic.nombre}`)
        }
    }

    const disminuirCompra = () => {
        if (!compra == 0) {
            setCompra(compra - 1)
        }
    }


    return (

        <>
            <div className='d-flex justify-content-center mt-3'>

                <button className='btn btn-warning' onClick={disminuirCompra}>-1</button>

                <p className='m-2'>{compra}</p>

                <button className='btn btn-warning' onClick={aumentarCompra}>+1</button>

            </div>

            {compra == comic.stock && compra != 0 ? 
                <div className='mt-2'><small>No hay más unidades disponibles</small></div> :
                null
            }
        </>
    )
}

export default ItemCount