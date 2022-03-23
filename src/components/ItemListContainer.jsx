import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { getComics } from '../mocks/FakeAPI'
import ItemList from './ItemList'
import Cargando from './Cargando'

const ItemListContainer = ({ titulo }) => {

    const [listaComics, setListaComics] = useState([])

    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        getComics()
            .then((res) => setListaComics(res))
            .catch(() => Swal.fire({
                title: 'Error!',
                text: 'Problema en la carga de datos',
                icon: 'error',
                confirmButtonText: 'Regresar'
            }))
            .finally(() => setCargando(false))
    }, [])



    return (
        <div>
            <h2 className='novedades-titulo'>{titulo}</h2>
            {cargando? <Cargando /> : <ItemList listaComics={listaComics} />}
        </div>
    )
}

export default ItemListContainer