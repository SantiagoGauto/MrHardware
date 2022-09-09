import React from 'react'
import ItemCount from "./ItemCount";
import "../css/card-menu.css"

function ItemDetail(props) {

  return (
      <div className='row'>

      {/* Parte Imágenes */}
          <div className='col'>
            <img src={props.item.imageSrc} alt={props.item.imageAlt}/>
          </div>

          {/* Nombre producto */}
          <div className='col detalles'>
            <div>
              <h1 className='nombre'>{props.item.nombre}</h1>
            </div>

              {/* Detalle: descripción */}
              <div>
                <h3 className='des'>Detalles</h3>
                <div>
                  <p>{props.item.descripción}</p>
                </div>
              </div>

            {/* Precio y botón para añadir */}
            <div>
              <p className='precio'>{props.item.precio}</p>
              <ItemCount stock={props.item.stock} mínimo={props.item.mínimo}/>
            </div>
          </div>

      </div>
  )
}

export default ItemDetail;