import React from 'react'

const ItemDetail = ({ comicDetail }) => {

    const { id, nombre, cover, stock, precio, editorial } = comicDetail

    return (

        <div className='d-flex justify-content-center'>
            <div className="card text-white bg-success  mb-3" style={{ maxWidth: "600px" }}>
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
                                <p className='card-text'>Editorial: {editorial}</p>
                                <p className="card-text">Precio: ${precio}</p>
                                <p className="card-text">Stock: {stock} unidades</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail