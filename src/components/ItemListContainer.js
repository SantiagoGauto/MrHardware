import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function ItemListContainer({ imageSource, title, text, url }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
            <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">
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

ItemListContainer.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};

export default ItemListContainer;