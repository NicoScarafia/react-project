import React from 'react'
// Componentes
import Cargando from './Cargando'
import Item from './Item'
// CustomHook
import useCollection from '../customHooks/useCollections'

const ListaNovedades = ({ q, title }) => {

    const {cargando, data: listaProductos} = useCollection(q)
    
    return (

        <div>
            <div className='mobile-title'><h3>{title}</h3></div>

            <div className="new-arrivals">
                <div className='category'><h3>{title}</h3></div>
                {
                    cargando ?
                        <Cargando />
                        :
                        <div className="product-container">
                            {listaProductos.map((prod) => (
                                <Item key={prod.id} product={prod} showCategory={false} />
                            ))}
                        </div>
                }
            </div>
        </div>
    )
}



export default ListaNovedades