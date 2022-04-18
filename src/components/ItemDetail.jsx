import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

import ItemCount from './ItemCount'
import BotonesHomeNavigation from './BotonesHomeNavigation'

const ItemDetail = ({ productDetail }) => {

    const { id, nombre, cover, stock = 5, precio, editorial, categoria } = productDetail

    const { cart, addItem, isInCart } = useContext(CartContext)


    const navigate = useNavigate()
    const handleNavigate = () => { navigate(-1) }


    const [compra, setCompra] = useState(1)

    const agregarAlCarrito = () => {

        const ItemToAdd = {
            nombre,
            editorial,
            cover,
            precio,
            compra,
            stock,
            id
        }

        addItem(ItemToAdd)
    }


    return (

        <div className='d-flex flex-column align-items-center justify-content-center'>

            <div className="card p-4 text-dark mx-2" style={{ maxWidth: "700px" }}>

                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cover} alt={`${nombre} Cover`}
                        className="img-fluid rounded" 
                        style={{outline: '0.08rem solid gray'}}/>
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

                        {
                            !isInCart(nombre) ?
                                <ItemCount
                                    compra={compra}
                                    stock={productDetail.stock}
                                    setCompra={setCompra}
                                    agregarAlCarrito={agregarAlCarrito}
                                />
                                :

                                <div className='mt-3'>
                                    <button onClick={handleNavigate} className='btn m-2 btn-sm btn-warning'>
                                        <i className="bi bi-bag-plus"></i> Continuar comprando
                                    </button>
                                    <Link to="/cart">
                                        <button className='btn m-2 btn-sm btn-primary'>
                                            <i className="bi bi-cart-fill"></i> Ir al carrito</button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <BotonesHomeNavigation />

        </div>

    )
}

export default ItemDetail