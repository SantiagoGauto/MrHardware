import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import promise from "../utils/promise";
import {useParams} from "react-router-dom";
import "../scss/app.scss";
//Firebase:
import { firestoreFetch } from "../utils/firebaseConfig"

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    promise(firestoreFetch(id))
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  }, [id])

//diseño del loading cuando iniciamos la pagina.
  return (
        products.length > 0 ? <ItemList item={products}/> :
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
  );
}

export default ItemListContainer;