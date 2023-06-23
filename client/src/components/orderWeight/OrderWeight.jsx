import React from "react";
import { useDispatch } from "react-redux";
import { orderWeight } from "../../redux/actions";
import "./OrderWeight.css";

function OrderWeight() {
  const dispath = useDispatch();

  const handlerOrderWeight = (event) => {
    dispath(orderWeight(event.target.value));
  };
  return (
    <div className="container-select-orden-weight">
      <label className="title-orden-weight">Peso: </label>
      <select
        name="Peso"
        onChange={handlerOrderWeight}
        className="select-orden-weight"
      >
        <option value="Menor-Mayor" className="option-orden-weight">
          Menor-Mayor
        </option>
        <option value="Mayor-Menor" className="option-orden-weight">
          Mayor-Menor
        </option>
      </select>
    </div>
  );
}

export default OrderWeight;
