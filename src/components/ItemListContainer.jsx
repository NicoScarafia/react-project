import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { getProducts } from '../mocks/FakeAPI'
import ItemList from './ItemList'
import Cargando from './Cargando'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ titulo }) => {

    const [listaProductos, setListaProductos] = useState([])

    const [cargando, setCargando] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setCargando(true)
        
        getProducts()

            .then((res) => {
                if (categoryId) {
                    setListaProductos(res.filter( (product) => product.categoria === categoryId) )
                } else {
                    setListaProductos(res)
                }
            })

            .catch(() => Swal.fire({
                title: 'Error!',
                text: 'Problema en la carga de datos',
                icon: 'error',
                confirmButtonText: 'Regresar'
            }))

            .finally(() => setCargando(false))
    }, [categoryId])



    return (
        <div>
            <h2 className='novedades-titulo'>{titulo}</h2>
            {cargando? <Cargando /> : <ItemList listaProductos={listaProductos} />}
        </div>
    )
}

export default ItemListContainer