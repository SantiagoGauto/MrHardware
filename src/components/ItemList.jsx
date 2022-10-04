import React from "react";
import Item from "./Item";
import "../css/card-menu.css"
import CarouselBackground from "./CarouselBackground";

function ItemList(props) {

  let item = props.item;

//llamado con props al PcListado
  return(
    <>
    <CarouselBackground />
      <div className="display">
          {item.map((item) => (
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
    </>
  );
}

export default ItemList;