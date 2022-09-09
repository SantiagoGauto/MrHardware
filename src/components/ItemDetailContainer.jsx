import {useEffect, useState} from "react";
import promise from "../utils/promise";
import ItemDetail from "./ItemDetail";
import {PcListado} from "../utils/products";
import {useParams} from "react-router-dom";
import "../scss/app.scss";

function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    promise(PcListado.filter(item => item.id == id))
      .then(result => setOneProduct(result[0]))
      .catch(err => console.log(err))
  }, [])

  console.log(oneProduct)

//diseño del loading cuando haces click en un producto.
  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div className="container">
        <div className="grid-big">
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
          <div className="cell-1"> </div>
        </div>
      </div>
  )
}

export default ItemDetailContainer;