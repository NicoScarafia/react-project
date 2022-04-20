import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Estilos
import '../styles/Catalogo.scss'
// Firebase
import { collection, getDocs, orderBy, query, where} from "firebase/firestore"
import { db } from "../firebase/config"
// Componentes
import ItemList from './ItemList'
import Cargando from './Cargando'
import SearchForm from './SearchForm'
import BotonesHomeNavigation from './BotonesHomeNavigation'


const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])

    const [cargando, setCargando] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setCargando(true)

        const productosRef = collection(db, "productos")

        const q = categoryId ? query(productosRef, orderBy('nombre'), where('categoria', '==', categoryId)) : query(productosRef, orderBy('nombre'))

        getDocs(q)
            .then( res => {
                let items = res.docs.map( (doc) => (
                    { 
                        id: doc.id,
                        ...doc.data()
                    }
                ))
                
                setListaProductos(items)
            })
            .catch( (err) => {console.log(err)} ) 
            .finally( () => setCargando(false) )

    }, [categoryId])


    // Search Form
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className='container'>
            <h3 className='catalogo-titulo fs-1'>
                {categoryId ? `Catálogo de ${categoryId}` : 'Catálogo de Productos'}
            </h3>

            <SearchForm 
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
            />

            {
                cargando
                ? <Cargando /> 
                : <ItemList listaProductos={listaProductos} search={search} />
            }

            <BotonesHomeNavigation />
        </div>
    )
}

export default ItemListContainer