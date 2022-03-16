import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ComicIssue = ({ comic }) => {

    return (

        <div className='m-4'>

            <div className='comic-cover'>
                <img src={comic.cover} alt={`Cover de ${comic.nombre}`} />
            </div>
            <h5 className='m-2'>{comic.nombre}</h5>

            <ItemCount comic={comic}/>

            <div className='mt-3'>
                <button
                    className={comic.stock > 0 ? 'btn btn-success' : 'btn btn-danger'}
                >
                    {comic.stock > 0 ? 'Comprar' : 'Sin stock'}
                </button>
            </div>
            
        </div>

    )
}

export default ComicIssue