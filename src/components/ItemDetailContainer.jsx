import React, { useState, useEffect } from 'react'
import { getComics } from '../mocks/FakeAPI'
import Cargando from './Cargando'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [comicDetail, setComicDetail] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getComics()
            .then( (res) => { setComicDetail(res.find(comic => comic.id === "2")) } )
            .catch( (error) => {console.log(error)} )
            .finally( setLoading(false) )
    }, [])

    return (

        loading? <p>Cargando</p> : <ItemDetail comicDetail={comicDetail}/>

    )
}

export default ItemDetailContainer