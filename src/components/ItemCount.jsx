import {useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
// uso de SweetAlert para las alertas de los productos en stock.
import swal from 'sweetalert';
import { CartContext } from "./CartContext";

// uso de ItemCount:
function ItemCount({item}) {
    const [countDetail, setCountDetail] = useState(0);
    const [goToCart, setGoToCart] = useState(false);
    const cartContext = useContext(CartContext);

  useEffect(() => {
    setCountDetail(item.mínimo)
  }, [item.mínimo])

  //para que el producto no sea negativo.
  function decrement() {
    if (countDetail > item.mínimo) {
      setCountDetail(countDetail - 1)
    }
  }

  //cantidad maxima, tope del producto alcanzado.
  function increment() {
    if (countDetail < item.stock) {
      setCountDetail(countDetail + 1)
    } else {
        swal(`¡Solo tenemos ${item.stock} de stock disponibles!`);
      }
  }

  //función de comprado en el carrito.
  function onAdd(quantity) {
    swal(`¡Se agregaron al carrito ${countDetail} unidades!`);
    setGoToCart(true);
    cartContext.addItem(item, quantity);
  }

  //diseño
  return (
    goToCart === false
    ?
    <div className="carrito-compras">
      <div className="btn__container btn-group btn-group-toggle">
        <button className="mr-5 px-4 py-1.5 hover:bg-indigo-100 botón-count" onClick={decrement}>-</button>
        <p className="contador">{countDetail}</p>
        <button className="ml-5 px-4 py-1.5 hover:bg-indigo-100 botón-count" onClick={increment}>+</button>
      </div>
      {/* el valor al ser 0 no permite hacer la compra */}
      {
        countDetail
      ? <button className="btn btn-primary btn_enviar" type="button" onClick={() => onAdd(countDetail)}> Comprar ahora </button>
      : <button class="btn btn-outline-dark btn-sm" disabled> Comprar ahora </button>
      }
    </div>
    :
    <>
    <div className="compras">
      <div className="ver-carrito">
        <Link to={'/cart'}> <button className="btn btn-primary btn_carrito" type="button"> Ver Carrito </button> </Link>
      </div>
      <div className="seguir-carrito">
        <Link to={'/'}> <button className="btn btn-primary btn_carrito" type="button"> Volver al catálogo 🛒 </button></Link>
      </div>
    </div>
    </>
  );
}

export default ItemCount;