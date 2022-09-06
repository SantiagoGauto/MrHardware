import React, {useState} from 'react'
import ItemCount from "./ItemCount";

function ItemDetail(props) {

  return (
      <div>
      {/* Parte Imágenes */}
          <div>
            <img src={props.item.imageSrc} alt={props.item.imageAlt}/>
          </div>
          {/* Nombre producto */}
            <div>
              <h1>{props.item.nombre}</h1>
            </div>

              {/* Detalle: descripción */}
              <div>
                <h3>Detalles</h3>
                <div>
                  <p>{props.item.descripción}</p>
                </div>
              </div>

            {/* Precio y botón para añadir */}
            <div>
              <p>{props.item.precio}</p>
                <div>
                  <ItemCount stock={props.item.stock} mínimo={props.item.mínimo}/>
                </div>
            </div>
      </div>
  )
}

export default ItemDetail;