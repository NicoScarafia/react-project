import React, { useState, useEffect } from 'react'
import { getDocs } from "firebase/firestore"
import Cargando from './Cargando'
import Item from './Item'

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

        <div>
            <div className='mobile-title'><h3>{title}</h3></div>

            <div className="new-arrivals">
                <div className='category'><h3>{title}</h3></div>
                {
                    cargando ?
                        <Cargando />
                        :
                        <div className="product-container">
                            {listaProductos.map((prod) => (
                                <Item key={prod.id} product={prod} showCategory={false} />
                            ))}
                        </div>
                }
            </div>
        </div>
    )
}



export default ListaNovedades