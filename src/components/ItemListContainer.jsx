import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Firebase
import { collection, getDocs, where } from "firebase/firestore"
import { db } from "../firebase/config"

// Componentes
import ItemList from './ItemList'
import Cargando from './Cargando'


const ItemListContainer = ({ titulo }) => {

    const [listaProductos, setListaProductos] = useState([])

    const [cargando, setCargando] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setCargando(true)

        const productosRef = collection(db, "productos")
        const query = categoryId ? query(productosRef, where('categoria', '==', categoryId)) : productosRef

        getDocs(query)
            .then( res => {
                let items = res.docs.map( (doc) => (
                    { 
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                console.log(items)
                
                items = items.sort( (a, b) => {
                    if (a.nombre < b.nombre) { return -1 }
                    if (a.nombre > b.nombre) { return 1 }
                    return 0;
                })
                
                setListaProductos(items)
            })
            .catch( (err) => {console.log(err)} ) 
            .finally( () => setCargando(false) )

    }, [categoryId])



    return (
        <div>
            <h2 className='novedades-titulo'>{titulo}</h2>
            {
                cargando
                ? <Cargando /> 
                : <ItemList listaProductos={listaProductos} />
            }
        </div>
    )
}

export default ItemListContainer