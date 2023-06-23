import React from "react";
import { useDispatch } from "react-redux";

import "./ButtonCheck.css";
import { filterBDD } from "../../redux/actions";

function ButtonCheck() {
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    console.log(e.target.checked);
    dispatch(filterBDD(e.target.checked));
  };

  return (
    <label className="rocker rocker-small">
      <input type="checkbox" onChange={handlerChange} />
      <span className="switch-left">BDD</span>
      <span className="switch-right">API</span>
    </label>
  );
}

export default ButtonCheck;
