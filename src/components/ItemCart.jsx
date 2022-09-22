import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCountAdd from "./ItemCountAdd";
import React from "react";

const ItemCart = () => {
    const cartContext = useContext(CartContext);

    //función cuando el carrito esta vació.
    if (cartContext.cartList.length === 0) {
        return (
        <>
        <p className="mt-2">El carrito está vacío.</p>
        <Link to='/'> <button> Hacer compra </button> </Link>
        </>
        )
    }


    //lo que se muestra cuando hay productos dentro del carrito.
    return (
        <>
        <div>

        {/* Remover todo // ('> 0 &&' para que desaparezca cuando esta vació el carrito) */}
            {cartContext.cartList.length > 0 &&
            <button onClick={cartContext.clear}>Borrar todo</button>}

        {/* Botón de seguir comprando */}
            {cartContext.cartList.length > 0 &&
            <Link to='/'>  <button> Seguir comprando </button> </Link>}

            {cartContext.cartList.map((product) => ( 
                <div key={product.id}>
                
                {/* Nombre del producto */}
                <h3>{product.nombre}</h3>

                {/* cantidad del producto */}
                <p>Cantidad: {product.quantity}</p>
                {/* <ItemCountAdd item={product}/> */}

                {/* precio del producto */}
                <p>Precio unitario: ${product.precio}</p>

                {/* subtotal del producto */}
                <p>Subtotal: ${product.quantity * product.precio}</p>

                {/* botón para borrar una lista del producto comprado */}
                <button onClick={() => cartContext.removeItem(product.id)}>Borrar</button>
                </div>))
            }

        {/* La suma total de TODOS los productos */}
        <p>Total: ${cartContext.totalPrice()}</p>

        </div>
        </>
    )
}

export default ItemCart;