// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getIdDog } from "../../redux/actions";
import imageDefault from "../../image/dog.jpg";

import "./DetailDogs.css";

function DetailDog() {
  const { detailId } = useParams();
  const idDog = useSelector((state) => state.idDog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIdDog(detailId));
  }, [dispatch, detailId]);

  const { name, image, weight, height, life_span, temperament, origin } = idDog;

  return (
    <div className="container-detail">
      <div className="container-text-detail">
        <h1 className="title-detail">{name}</h1>
        <p>PESO: {weight} Kg.</p>
        <p>ALTURA: {height} cm.</p>
        <p>AÑOS DE VIDA: {life_span}</p>
        <p className="temperaments">
          TEMPERAMENTOS:
          {temperament ? temperament : "Happy, Intelligent, Alert"}
        </p>
        <p>ORIGEN: {origin}</p>
      </div>
      <div className="container-image">
        {image ? (
          <img src={image} alt={name} className="image" />
        ) : (
          <img src={imageDefault} alt={"imageDefault"} />
        )}
      </div>
      <div className="container-btn-detail">
        <Link to={"/cucha"} className="btn-detail">
          BACK
        </Link>
      </div>
    </div>
  );
}

export default DetailDog;
