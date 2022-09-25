import {useEffect, useState} from "react";
import promise from "../utils/promise";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import "../scss/app.scss";
//Firebase:
import { firestoreOneFetch } from "../utils/firebaseConfig"

function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    promise(firestoreOneFetch(id))
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, [id])

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