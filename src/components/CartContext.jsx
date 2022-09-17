import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    // Agregado de cierta cantidad de un item al carrito.
    const addItem = (item, qty) => {
        let itemForCart = {
            ...item,
            qty
        }

        setCartList([
            ...cartList,
            itemForCart
        ])
    }

    // Remover un Item del cart con el uso de su id.
    const removeItem = (id) => {
        let newCartList = cartList.filter(item => item.id !== id)
        setCartList(newCartList)
    }

    // Remover TODOS los items.
    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;