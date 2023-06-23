import React from "react";
import "./ButtonBack.css";

function ButtonBack({ handlerClickBack, dogs, currentPage }) {
  return (
    <div>
      <button
        className="btn-back"
        onClick={handlerClickBack}
        // disabled={dogs.length < 1 || currentPage <= 1}
      >
        Anterior
      </button>
    </div>
  );
}

export default ButtonBack;
