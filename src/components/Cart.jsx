import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const ctx = useContext(CartContext);

    return (
        <>
        <div>

        {/* Remover todo */}
            <button onClick={ctx.clear}>Borrar todo</button>
            {ctx.cartList.map(item => 
                <div>

                <h3>{/* Nombre del producto */}</h3>
                {item.nombre} 

                {/* cantidad del producto */}
                <p>Stock={item.qty}</p>

                {/* botón para borrar una lista del producto comprado */}
                <button onClick={() => ctx.removeItem(item.id)}>Borrar</button>
                </div>)
            }
        </div>
        </>
    )
}

export default Cart;