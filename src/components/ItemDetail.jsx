import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ItemDetail = ({ productDetail }) => {

    const { id, nombre, cover, stock, precio, editorial, categoria } = productDetail
    
    const navigate = useNavigate()

    return (

        <div className='d-flex flex-column align-items-center justify-content-center'>

            <div className="card text-white bg-success  mb-3" style={{ width: "650px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cover} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title text-uppercase mt-4">
                                {nombre}
                            </h5>
                            <div className='mt-5'>
                                <p className='card-text'>Categoría: {categoria}</p>
                                <p className='card-text'>Editorial: {editorial}</p>
                                <p className="card-text">Precio: ${precio}</p>
                                <p className="card-text">Stock: {stock} unidades</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={ () => { navigate(-1)  }} className='m-2 mb-5 btn btn-primary'>Volver</button>
                <Link to="/" ><button className='m-2 mb-5 btn btn-primary'>Ir a la Home</button></Link>
            </div>

        </div>

    )
}

export default ItemDetail