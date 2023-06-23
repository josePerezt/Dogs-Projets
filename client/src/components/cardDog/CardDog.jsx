import React from "react";
import "./CarDog.css";
import { Link } from "react-router-dom";
import imageDefault from "../../image/dog.jpg";

function CardDog({ id, name, image, weight, temperament }) {
  return (
    <div key={id} className="container-card">
      <Link to={`/detail/${id}`}>
        {image ? (
          <img src={image} alt={name} className="image" />
        ) : (
          <img src={imageDefault} alt={"imageDefault"} />
        )}
      </Link>
      <div className="container-title">
        <h2 className="title">{name}</h2>
      </div>
      <div className="container-p">
        <p>
          Peso: {weight}
          <b>Kg.</b>
        </p>
        <p>{temperament ? temperament : "Happy,Intelligent,Alert"}.</p>
      </div>
    </div>
  );
}

export default CardDog;
