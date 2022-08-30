import React from "react";
import PropTypes from "prop-types";

import "../css/card-inicio.css";

function CardInicio ({ imageSource, title, text, url }) {
    return (
        <div className="card card-inicio text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow desbordamiento">
            <img src={imageSource} alt="a wallpaper" className="card-img-top card-img-top-inicio" />
        </div>
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text card-text-inicio text-secondary">
            {text
                ? text
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "}
            </p>
            <a
            href={url ? url : "#!"}
            target="_blank"
            className="boton-pc btn btn-outline-secondary border-0"
            rel="noreferrer"
            >
            {title}
            </a>
        </div>
        </div>
    );
}

CardInicio.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};

export default CardInicio;