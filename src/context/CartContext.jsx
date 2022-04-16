import { createContext, useState } from 'react'

export const CartContext = createContext()


export const CustomCartProvider = ({children}) => {

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
        return cart.reduce((acc, prod) => acc += prod.compra * prod.precio, 0)
    }

    const eliminarElemento = (nombre) => {
        setCart(cart.filter((e) => e.nombre !== nombre));
    }

    const aumentarCantidad = (nombre) => {
        const productoSeleccionado = cart.map((item) => {
            if (item.nombre === nombre) {
                
                if (item.compra < item.stock) {
                    return {
                        ...item,
                        compra: item.compra + 1
                    };
                }
               
            }
            return item;
        });
        setCart(productoSeleccionado);
    };

    const disminuirCantidad = (nombre) => {
        const productoSeleccionado = cart.map((item) => {

            if (item.nombre === nombre) {

                if (item.compra > 1) {
                    return {
                        ...item,
                        compra: item.compra - 1
                    };
                }
            }
            return item;
        });
        setCart(productoSeleccionado);
    };


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
                aumentarCantidad,
                disminuirCantidad,
            }}>
            {children}
        </CartContext.Provider>

    )

}