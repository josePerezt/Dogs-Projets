import React, { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { Dogs, NameDogs } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [dog, setDog] = useState("");

  const handlerChange = (e) => {
    e.preventDefault();
    setDog(e.target.value);
  };

  const handlerlClick = () => {
    dispatch(NameDogs(dog));
    setDog("");
  };

  const handlerClick2 = () => {
    dispatch(Dogs());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ingresa la raza"
        onChange={handlerChange}
        value={dog}
        className="input"
      />
      <button
        disabled={!dog}
        type="submit"
        onClick={handlerlClick}
        className="btn"
      >
        Buscar
      </button>
      <button className="btn" onClick={handlerClick2}>
        Todos
      </button>
    </div>
  );
}

export default SearchBar;
