import React from "react";
import "./ButtonNext.css";

function ButtonNext({ handlerClickNext, dogs }) {
  return (
    <div>
      <button className="btn-next" onClick={handlerClickNext}>
        Siguiente
      </button>
    </div>
  );
}

export default ButtonNext;
