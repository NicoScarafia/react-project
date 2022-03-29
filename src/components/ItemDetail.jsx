import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ productDetail }) => {

    const { id, nombre, cover, stock, precio, editorial, categoria } = productDetail

    const navigate = useNavigate()


    const [compra, setCompra] = useState(1)

    const agregarAlCarrito = () => {
        const ItemToAdd = {
            nombre,
            editorial,
            cover,
            precio, 
            compra
        }
        console.log(ItemToAdd)
    }
    

    return (

        <div className='d-flex flex-column align-items-center justify-content-center'>

            <div className="card text-dark" style={{ width: "700px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cover} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title text-uppercase fw-bold">
                                {nombre}
                            </h4>
                            <div className='mt-4'>
                                <p className='card-text'>Categoría: {categoria}</p>
                                <p className='card-text'>Editorial: {editorial}</p>
                                <p className="card-text">Precio: ${precio}</p>
                                <p className="card-text">Stock disponible: {stock} unidades</p>
                            </div>
                        </div>

                        <ItemCount 
                            stock={productDetail.stock}
                            agregarAlCarrito={agregarAlCarrito}
                            compra= {compra}
                            setCompra= {setCompra} 
                        />
                    </div>

                </div>

            </div>

            <div className='mt-5'>
                <button onClick={() => { navigate(-1) }} className='m-2 mb-5 btn btn-primary'>Volver</button>
                <Link to="/" ><button className='m-2 mb-5 btn btn-primary'>Ir a la Home</button></Link>
            </div>

        </div>

    )
}

export default ItemDetail