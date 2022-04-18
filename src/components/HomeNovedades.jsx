import React from 'react'
// Firebase
import { collection, query, where, limit } from "firebase/firestore"
import { db } from "../firebase/config"
// Estilos
import '../styles/NewProducts.scss'
// Componentes
import ListaNovedades from './ListaNovedades'

const HomeNovedades = () => {

    const productosRef = collection(db, "productos")

    const nuevosMangas = query(productosRef, where('nuevo', '==', true), where('categoria', '==', 'mangas'), limit(5))
    const nuevosComics = query(productosRef, where('nuevo', '==', true), where('categoria', '==', 'comics'), limit(5))

    return (

        <div className='newproducts-container'>

            <h2 className='mt-5'>NOVEDADES</h2>
            <ListaNovedades title='comics' show={nuevosComics} />
            <ListaNovedades title='mangas' show={nuevosMangas} />

        </div>

    )
}

export default HomeNovedades