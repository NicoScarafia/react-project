import React, { useState, useEffect } from 'react'
import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db } from "../firebase/config"
import { Link } from 'react-router-dom'
import Cargando from './Cargando'

const ListaNovedades = ({ show, title }) => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)


    useEffect(() => {
        setCargando(true)
        let unmounted = false;

        const q = show

        getDocs(q)
            .then(res => {
                let items = res.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))

                items = items.sort((a, b) => {
                    if (a.nombre < b.nombre) { return -1 }
                    if (a.nombre > b.nombre) { return 1 }
                    return 0;
                })

                if (!unmounted) {
                    setListaProductos(items)
                }
            })
            .catch((err) => { console.log(err) })
            .finally(() => {
                if (!unmounted) {
                    setCargando(false)
                }
            })

        return () => { unmounted = true };
    }, [])

    return (

        <div className='mt-2'>
            <div className='mobile-title'>
                <h3>{title}</h3>
            </div>

            <div className="new-arrivals">

                <div className='category'>
                    <h3>{title}</h3>
                </div>

                {
                    cargando ?
                        <Cargando />
                        :
                        <div className="product-container">
                            {listaProductos.map((prod) => (
                                <div key={prod.nombre}>
                                    <div className='product-card'>
                                        <img src={prod.cover} alt={`${prod.nombre} cover`} />
                                        <h4>{prod.nombre}</h4>
                                        <p className='price'>${prod.precio}</p>

                                        <Link to={`/detail/${prod.id}`}>
                                            <i className="bi bi-box-arrow-in-right"></i> Ver más
                                        </Link>

                                    </div>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </div>
    )
}



export default ListaNovedades