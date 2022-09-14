import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
// uso de SweetAlert para las alertas de los productos en stock.
import swal from 'sweetalert';

// uso de ItemCount:
function ItemCount(props) {
    const [countDetail, setCountDetail] = useState(1);
    const [goToCart, setGoToCart] = useState(false);

  useEffect(() => {
    setCountDetail(props.mínimo)
  }, [props.mínimo])

  //para que el producto no sea negativo.
  function decrement() {
    if (countDetail !== props.mínimo) {
      setCountDetail(countDetail - 1)
    }
  }

  //cantidad maxima, tope del producto alcanzado.
  function increment() {
    if (countDetail !== props.stock) {
      setCountDetail(countDetail + 1)
    } else {
        swal(`¡Solo tenemos ${props.stock} de stock disponibles!`);
      }
  }

  //función de comprado en el carrito.
  function onAdd() {
    swal(`¡Se agregaron al carrito ${countDetail} unidades!`);
    setGoToCart(true);
  }

  //diseño
  return (
    goToCart === false
    ?
    <div>
      <div className="btn__container btn-group btn-group-toggle">
        <button className="mr-5 px-4 py-1.5 hover:bg-indigo-100 botón-count" onClick={decrement}>-</button>
        <p className="contador">{countDetail}</p>
        <button className="ml-5 px-4 py-1.5 hover:bg-indigo-100 botón-count" onClick={increment}>+</button>
      </div>
      <button className="btn btn-primary btn_enviar" type="button" onClick={onAdd}> Comprar ahora </button>
    </div>
    :
    <Link to={'/cart'}> <button className="btn btn-primary btn_enviar" type="button"> Ver Carrito </button> </Link>
  );
}

export default ItemCount;