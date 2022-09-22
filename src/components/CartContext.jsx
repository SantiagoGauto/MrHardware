import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);


    // Agregado de cierta cantidad de un item al carrito.
    const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			setCartList(
				cartList.map((product) => {
					return product.id === item.id
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

    // // Precio Total
    // const totalPrice = cartList.reduce(function (acumulador, productoActual) {
    //     return acumulador + productoActual.quantity}, 0);

    // // Costo Total
    // const totalProducts = cartList.reduce(function (acumulador, productoActual) {
    //     return acumulador + (Number(productoActual.precio) * productoActual.quantity)}, 0)

    // Precio Total
    const totalPrice = () => {
		return cartList.reduce((prev, act) => prev + act.quantity * act.precio, 0);
	};

    // Costo Total
	const totalProducts = () =>
    cartList.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

    return (
        <CartContext.Provider value={{
            cartList, 
            addItem, 
            removeItem, 
            clear,
            totalPrice,
			totalProducts,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;