import React from "react";
import Card from "./CardInicio";

import image1 from "../assets/pc1_1.jpg";
import image2 from '../assets/pc2_1.jpg'
import image3 from '../assets/pc3_1.jpg'

const cards = [
  {
    id: 1,
    title: "Básico",
    image: image1,
    url: "#",
  },
  {
    id: 2,
    title: "Workstation",
    image: image2,
    url: "#",
  },
  {
    id: 3,
    title: "Gaming",
    image: image3,
    url: "#",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
