import React, { useContext, useEffect, useState } from 'react'
// Firebase
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import { db } from "../firebase/config"
import { AuthContext } from '../context/AuthContext'
// Componentes
import Cargando from './Cargando'


const PedidosRealizados = () => {

    const { currentUser } = useContext(AuthContext)

    const user = currentUser.email

    const [listaOrdenes, setListaOrdenes] = useState([])
    const [cargando, setCargando] = useState(false)


    useEffect(() => {
        setCargando(true)
        let unmounted = false 

        const getOrders = async () => {

            const ordersRef = collection(db, 'ordenes')
            const q = query(ordersRef, where('orden.comprador', '==', user), orderBy('orden.fecha'))

            await getDocs(q)
                .then(res => {
                    let ordenes = res.docs.map((doc) => (
                        {
                            ...doc.data(),
                            id: doc.id
                        }
                    ))
                    if (!unmounted) {
                        // ordenes = ordenes.sort((a, b) => a.orden.fecha.seconds > b.orden.fecha.seconds)
                        setListaOrdenes(ordenes)
                    }
                })
                .catch((err) => { console.error(err) })
                .finally(() => {
                    if(!unmounted) {
                        setCargando(false)
                    }
                })
        }
        getOrders()
        return () => { unmounted = true };
    }, [])



    if (cargando) {
        return (
            <Cargando />
        )
    }

    if (listaOrdenes.length === 0) {
        return (
            <div className='mt-5 mx-auto card bg-light' style={{maxWidth: '15rem'}}>
                <p className='fs-6 m-auto py-2'>Aún no realizaste pedidos</p>
            </div>
        )
    }

    return (

        <div className='mt-5'>
            {
                listaOrdenes.map((el) => (
                    <div key={el.id} className='card mb-5 mx-auto' style={{ maxWidth: '460px' }}>

                        <div className="card-header bg-success mb-2">
                            <p className='fw-bold m-0'>ID: {el.id}</p>
                            <small>
                                Fecha: {el.orden.fecha.toDate().toLocaleDateString('en-GB')}
                            </small>
                        </div>
                        {
                            el.orden.items.map((item) => (
                                <div key={item.id} className="row g-0 px-4 my-1">
                                    <div className="col-md-2">
                                        <img style={{maxHeight: '7rem'}} src={item.cover} className="img-fluid rounded-start" alt={`${item.nombre} Cover`} />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body py-2">
                                            <h6 className="card-title text-uppercase m-0">{item.nombre}</h6>
                                            <p className='m-0'>Cantidad: {item.compra} unidades</p>
                                            <p className='m-0'>Precio: ${item.compra * item.precio}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                        <div className='card-header bg-secondary mt-2 text-black'>
                            <p className='m-0'>Costo total: ${el.orden.total}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PedidosRealizados