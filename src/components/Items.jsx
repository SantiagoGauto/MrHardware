import React from "react";
import {Link} from "react-router-dom";
import "../css/card-menu.css";
import Tilt from 'react-vanilla-tilt';

function Items (props) {
  return (
    // <Tilt>
        <Link className="card rgb" to={`/item/${props.id}`}>
          <div className="like"></div>
              <img src={props.imageSrc} alt={props.imageAlt} className="card-img-top"/>
            <div className="card-body">
              <div>
                <h3 className="card-title"> 
                  <a href={props.href}> {props.nombre} </a>
                </h3>
                <div className="rating">{props.rating}</div>
              </div>
              <p>{props.precio}</p>
            </div>
        </Link>
    // </Tilt>
  );
}

export default Items;