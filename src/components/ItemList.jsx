import React from "react";
import Item from "./Items";
import "../css/card-menu.css"

function ItemList(props) {

  let items = props.items;

//llamado con props al PcListado
  return(
      <div className="display">
          {items.map((item) => (
            <Item
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              nombre={item.nombre}
              precio={item.precio}
              rating={item.rating}
              mínimo={item.mínimo}
              stock={item.stock}
              id={item.id}
            />
          ))}
      </div>
  );
}

export default ItemList;