import React, { useState } from 'react'
import Item from './Item'


const ItemList = ({ listaProductos, search }) => {   

    return (

        <div>
            <div className='mb-5 mx-auto comic-list container'>
                {
                listaProductos.filter(
                    prod => prod.nombre.toLowerCase().includes(search.toLowerCase()) ||
                            prod.editorial.toLowerCase().includes(search.toLowerCase())
                )
                .map((product) => (
                    <Item comic={product} key={product.id} />
                ))}
            </div>
        </div>

    )
}

export default ItemList