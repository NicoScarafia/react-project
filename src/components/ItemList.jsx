import React from 'react'
import Item from './Item'

const ItemList = ({ listaComics }) => {
    return (

        <div className='mb-5 comic-list'>

            {listaComics.map((comic) => (

                <Item comic={comic} key={comic.id} />

            ))}

        </div>

    )
}

export default ItemList