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
                <h3 className='des'>Componentes</h3>
                <div>
                  <p>Procesador: {props.item.CPU}</p>
                  <p>Memoria Ram: {props.item.RAM}</p>
                  <p>Placa de video: {props.item.VideoCard}</p>
                  <p>Placa madre: {props.item.MOTHERBOARD}</p>
                  <p>Disco: {props.item.DISK}</p>
                  <p>Fuente: {props.item.Fuente}</p>
                </div>
              </div>

            {/* Precio y botón para añadir */}
            <div>
              <p className='precio'> Total: ${props.item.precio}</p>
              <div className='flex'>
              <p className='stock'> Cantidad de Stock:</p><p className='stock-numero'>{props.item.stock}</p>
              </div>
              <ItemCount item={props.item}/>
            </div>
          </div>

      </div>
  )
}

export default ItemDetail;