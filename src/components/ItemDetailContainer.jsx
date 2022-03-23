import React, { useState, useEffect } from 'react'
import { getComics } from '../mocks/FakeAPI'
import Cargando from './Cargando'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [comicDetail, setComicDetail] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        getComics()
            .then((res) => { setComicDetail(res.find(comic => comic.id === "3")) })
            .catch((error) => { console.log(error) })
            .finally(() => setCargando(false))
    }, [])


    return (

        <div className='mt-5'>
            <h2>DETALLE DEL PRODUCTO</h2>
            <div className='mt-5'>
                {cargando ? <Cargando /> : <ItemDetail comicDetail={comicDetail} />}
            </div>
        </div>

    )
}

export default ItemDetailContainer