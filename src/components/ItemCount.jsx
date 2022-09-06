import {useEffect, useState} from "react";
// uso de SweetAlert para las alertas de los productos en stock.
import swal from 'sweetalert';

// uso de ItemCount:
function ItemCount(props) {
    const [countDetail, setCountDetail] = useState(1);

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
  function addToCart() {
    swal(`¡Se agregaron al carrito ${countDetail} unidades!`);
  }

  //diseño
  return (
    <div>
      <div className="btn__container btn-group btn-group-toggle">
        <button className="mr-5 px-4 py-1.5 hover:bg-indigo-100" onClick={decrement}>-</button>
        Stock: {countDetail}
        <button className="ml-5 px-4 py-1.5 hover:bg-indigo-100" onClick={increment}>+</button>
      </div>
      <button className="btn btn-primary" type="button" onClick={addToCart}> Comprar </button>
    </div>
  );
}

export default ItemCount;