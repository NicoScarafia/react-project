import React from 'react'
import Item from './Item'


const ItemList = ({ listaProductos, search }) => {   

    return (

        <div>
            <div className='mx-auto my-5 container d-flex justify-content-evenly flex-wrap' style={{maxWidth: '60rem'}}>
                {
                listaProductos.filter(
                    prod => prod.nombre.toLowerCase().includes(search.toLowerCase()) ||
                            prod.editorial.toLowerCase().includes(search.toLowerCase())
                )
                .map((product) => (
                    <Item product={product} key={product.id} />
                ))}
            </div>
        </div>

    )
}

export default ItemList