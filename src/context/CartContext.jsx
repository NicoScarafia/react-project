import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')


export const CustomCartProvider = ({ children }) => {

    const [cart, setCart] = useState(cartFromLocalStorage)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

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

    const eliminarElemento = (id) => {
        setCart(cart.filter((e) => e.id !== id));
    }

    const aumentarCantidad = (id) => {
        const productoSeleccionado = cart.map((item) => {
            if (item.id === id) {

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

    const disminuirCantidad = (id) => {
        const productoSeleccionado = cart.map((item) => {

            if (item.id === id) {

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