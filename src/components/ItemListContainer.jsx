import React, {useState, useEffect} from "react";
import promise from "../utils/promise";
import {PcListado} from "../utils/PcListado";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import "../scss/app.scss";

export default function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    if (id) {
      promise(PcListado.filter(item => item.category == id))
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    } else {
      promise(PcListado)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }
  }, [id])

//diseño del loading cuando iniciamos la pagina.
  return (
        products.length > 0 ? <ItemList items={products}/> :
        <div class="container">
          <div class="grid-big">
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
            <div class="cell-1"> </div>
          </div>
        </div>
  );
}