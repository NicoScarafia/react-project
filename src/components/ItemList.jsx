import React from 'react'
import Item from './Item'

const ItemList = ({ listaProductos }) => {
    return (

        <div className='mb-5 comic-list'>

            {listaProductos.map((product) => (

                <Item comic={product} key={product.id} />

            ))}

        </div>

    )
}

export default ItemList