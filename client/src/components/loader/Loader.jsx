import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="container-loader">
      <h4 className="title-cargando">CARGANDO...</h4>
      <div className="spiner"></div>
    </div>
  );
}

export default Loader;
