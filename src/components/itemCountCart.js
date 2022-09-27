import {useEffect, useState, useContext} from "react";
// uso de SweetAlert para las alertas de los productos en stock.
import swal from 'sweetalert';
import {CartContext} from "./CartContext";

export default function ItemCountCart({item}) {
  const cartContext = useContext(CartContext)
  const [totalPrice, settotalPrice] = useState(item.quantity)

  useEffect(() => {
    item.quantity = totalPrice
    cartContext.addItem(item)
  },[totalPrice])

  function Resta() {
    if (totalPrice !== item.mínimo) {
      settotalPrice(totalPrice - 1)
    }
  }

  function Suma() {
    if (totalPrice !== item.stock) {
      settotalPrice(totalPrice + 1)
    } else {
      swal(`¡No puedes agregar más de ${item.stock} unidades!`);
    }
  }

  return (
<div>
        <div>
          <button onClick={Resta}>-</button>
          <button onClick={Suma}>+</button>
        </div>
</div>
  );
}