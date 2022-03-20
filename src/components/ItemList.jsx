import React, { useEffect, useState } from 'react'
import Cargando from './Cargando'
import Item from './Item'
import Swal from 'sweetalert2'

const ItemList = ({ comic }) => {

    const [listaComics, setListaComics] = useState([])

    const [cargando, setCargando] = useState(false)

    const getComics = () => {

        setCargando(true)

        return new Promise((res, rej) => {

            let condition = true

            if (condition) {
                setTimeout(() => {
                    res(comic)
                }, 2000)
            } else {
                rej(console.error('Error en la obtención de datos'))
            }
        })
    }

    useEffect(() => {
        getComics()
            .then((res) => setListaComics(res))
            .catch((err) => Swal.fire({
                title: 'Error!',
                text: 'Problema en la carga de datos',
                icon: 'error',
                confirmButtonText: 'Regresar'
              }))
            .finally(() => setCargando(false))
    }, [])


    if (cargando) {
        return <Cargando />
    }

    return (
        
        <div>

            <div className='comic-list'>
                {listaComics.map((comic) => (

                    <Item comic={comic} key={comic.nombre} />

                ))}
            </div>

        </div>
    )
}

export default ItemList