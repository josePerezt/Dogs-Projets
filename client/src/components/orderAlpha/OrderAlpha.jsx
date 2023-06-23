import React from "react";
import "./OrderAlpha.css";
import { useDispatch } from "react-redux";
import { orderDogs } from "../../redux/actions";

function OrderAlpha() {
  const dispath = useDispatch();

  const handleOrder = (event) => {
    dispath(orderDogs(event.target.value));
  };

  return (
    <div className="container-select-orden">
      <label className="title-orden">Orden: </label>
      <select onChange={handleOrder} className="select">
        <option key={"A - Z"} value="A - Z" className="option-orden">
          A - Z
        </option>
        <option key={"Z - A"} value="Z - A" className="option-orden">
          Z - A
        </option>
      </select>
    </div>
  );
}

export default OrderAlpha;
