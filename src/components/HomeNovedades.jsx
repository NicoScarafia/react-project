import React from 'react'
// Firebase
import { collection, query, where, limit, orderBy } from "firebase/firestore"
import { db } from "../firebase/config"
// Estilos
import '../styles/NewProducts.scss'
// Componentes
import ListaNovedades from './ListaNovedades'

const HomeNovedades = () => {

    const productosRef = collection(db, "productos")
    const nuevosComics = query(productosRef, orderBy('nombre'), where('nuevo', '==', true), where('categoria', '==', 'comics'), limit(5))
    const nuevosMangas = query(productosRef, orderBy('nombre'), where('nuevo', '==', true), where('categoria', '==', 'mangas'), limit(5))

    return (

        <div className='newproducts-container'>

            <h2 className='my-5'>NOVEDADES</h2>
            <ListaNovedades title='comics' q={nuevosComics} />
            <ListaNovedades title='mangas' q={nuevosMangas} />

        </div>

    )
}

export default HomeNovedades