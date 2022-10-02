import { createContext, useState, useContext } from "react";

export const useCartContext = () => useContext(CartContext);

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    // Agregado de cierta cantidad de un item al carrito.
    const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			setCartList(
				cartList.map((product) => {
					return product.id !== item.id
						? { ...product, quantity: product.quantity + quantity }
						: product; 
				}),
			);
		} else {
			setCartList([...cartList, { ...item, quantity }]);
		}
	};

    const isInCart = (id) =>
		cartList.find((product) => product.id === id) ? true : false;

    // Remover un Item del cart con el uso de su id.
    const removeItem = (id) => {
        let newCartList = cartList.filter(item => item.id !== id)
        setCartList(newCartList)
    }

    // Remover TODOS los items.
    const clear = () => {
        setCartList([])
    }

    // Precio Total
    const totalPrice = () => {
		return cartList.reduce((prev, act) => prev + act.quantity * act.precio, 0);
	};

    // Total de productos
	const totalProducts = () =>
    cartList.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

    // Costo Total + envió ($1,200) = Total
    const TotalEnvióPrice = () => 
    cartList.reduce(
        (envió, producto) => envió + producto.quantity * producto.precio,
        1200,
    );

    return (
        <CartContext.Provider value={{
            cartList, 
            addItem, 
            removeItem, 
            clear,
            totalPrice,
			totalProducts,
            TotalEnvióPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;