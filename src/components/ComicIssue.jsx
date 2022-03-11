import React from 'react'

const ComicIssue = ({ comic }) => {

    return (

        <div className='m-4'>
            <div className='comic-cover'>
                <img src={comic.cover} alt={`Cover de ${comic.nombre}`} />
            </div>
            <h5 className='m-2'>{comic.nombre}</h5>

            <div>
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