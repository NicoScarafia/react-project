import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Firebase
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore"
// Componentes
import Cargando from './Cargando'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [cargando, setCargando] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setCargando(true)

        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then(doc => {
                const prod = {
                    id: doc.id,
                    ...doc.data()
                }
                setProductDetail(prod)
            })
            .finally(() => { setCargando(false) })
    }, [itemId])


    return (

        <div className='text-center mt-5'>
            <h2>DETALLE DEL PRODUCTO</h2>
            <div className='mt-5'>
                {
                    cargando
                    ? <Cargando />
                    : <ItemDetail productDetail={productDetail} />
                }
            </div>
        </div>

    )
}

export default ItemDetailContainer