import {useContext, useEffect, useState} from "react";
import swal from 'sweetalert';
import {CartContext} from "./CartContext";

function ItemCountAdd({item}) {
    const cartContext = useContext(CartContext)
    const [cantidad, setCantidad] = useState(item.quantity)

useEffect(() => {
    item.quantity = cantidad
    cartContext.addItem(item)
},[cantidad])

function Up() {
    if (cantidad !== item.stock) {
        setCantidad(cantidad + 1)
    } else {
        swal(`¡Solo tenemos ${item.stock} de stock disponibles!`);
    }
}

function Down() {
    if (cantidad !== item.mínimo) {
        setCantidad(cantidad - 1)
    }
}

return (
<div>
        <div>
        <button onClick={Down}>-</button>
        <button onClick={Up}>+</button>
        </div>
</div>
);
}

export default ItemCountAdd;