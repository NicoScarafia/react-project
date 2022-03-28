import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../mocks/FakeAPI'
import Cargando from './Cargando'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [cargando, setCargando] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
        setCargando(true)
        getProducts()
            .then((res) => { setProductDetail(res.find(product => product.id === itemId)) })
            .catch((error) => { console.log(error) })
            .finally(() => setCargando(false))
    }, [])
    

    return (

        <div className='text-center mt-5'>
            <h2>DETALLE DEL PRODUCTO</h2>
            <div className='mt-5'>
                {cargando ? <Cargando /> : <ItemDetail productDetail={productDetail} />}
            </div>
        </div>

    )
}

export default ItemDetailContainer