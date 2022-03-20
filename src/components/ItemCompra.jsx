import React, { useState } from 'react'

const ItemCompra = ({ comic, initialCompra }) => {

    const [compra, setCompra] = useState(initialCompra)

    const aumentarCompra = () => {
        if (comic.stock > compra) {
            setCompra(compra + 1)
        } else {
            console.log
                (`Ya alcanzaste el máximo de unidades disponibles para ${comic.nombre}`)
        }
    }

    const disminuirCompra = () => {
        if (compra != 1) {
            setCompra(compra - 1)
        }
    }


    return (

        <>
            {
                comic.stock > 0 ?

                <div className='d-flex justify-content-center mt-3'>
                    <button className='btn btn-outline-success btn-sm' onClick={disminuirCompra}>-</button>

                    <p className='m-2'>{compra}</p>

                        <button className='btn btn-outline-success btn-sm' onClick={aumentarCompra}>+</button>
                 </div>

                : null
            }
            {
                compra == comic.stock && compra != 0 ?

                <p style={{fontSize: "0.9rem", marginTop:"0.5rem", lineHeight:"1rem"}}>No hay más unidades disponibles</p>
                
                : null
            }
        </>
    )
}

export default ItemCompra