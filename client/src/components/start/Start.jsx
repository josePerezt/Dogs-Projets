import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="container-start">
      <h1 className="start-title">THE DOG APP</h1>
      <h4 className="title-dinamita">
        Bienvenido al mundo de las razas de perros. <br />
        ¿Listo para explorar y aprender más? <br />
        Toca a Dinamita para adentrarte en esta aventura perruna.
        <br />
      </h4>
      <div>
        <Link to={"/cucha"} className="link-dog">
          🐶
        </Link>
      </div>
    </div>
  );
};

export default Start;
