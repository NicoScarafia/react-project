import { createContext, useState } from 'react'

export const CartContext = createContext()



export const CustomCartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([item, ...cart])
    }

    const isInCart = (nombre) => {
        return cart.some(e => e.nombre === nombre)
    }

    const itemsInCart = () => {
        return cart.reduce((acc, prod) => acc += prod.compra, 0)
    }

    const vaciarCarrito = () => {
        return setCart([])
    }
    
    const cartTotal = () => {
        return cart.reduce( (acc, prod) => acc += prod.compra * prod.precio, 0 )
    }

    const eliminarElemento = (nombre) => {
        setCart(cart.filter((e) => e.nombre !== nombre));
    }

    // const cartTotal2 = () => {
    //     const precioCompra = []
    //     for (let i = 0; i < cart.length; i++) {
    //         let precioItem = cart[i].precio * cart[i].compra
    //         precioCompra.push(precioItem)
    //     }
    //     const precioTotal = precioCompra.reduce((a, b) => a + b, 0)
    //     return precioTotal
    // }


    return (

        <CartContext.Provider 
            value={{
                cart, 
                setCart, 
                addItem, 
                isInCart, 
                itemsInCart, 
                vaciarCarrito, 
                cartTotal, 
                eliminarElemento,
            }}>
            {children}
        </CartContext.Provider>

    )

}