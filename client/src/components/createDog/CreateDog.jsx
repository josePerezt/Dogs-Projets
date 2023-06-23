import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dogs, createNewDog, getTemperaments } from "../../redux/actions";
import "./CreateDog.css";
import { orderAlpha } from "../../functions/functionOrder";
import validation from "../../functions/validation";

function CreateDog() {
  const allTemperaments = useSelector((state) => state.allTemperaments);

  const [temperaments, setTemperament] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  const [newDog, setNewDog] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
    origin: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
    origin: "",
  });

  useEffect(() => {
    setTemperament(allTemperaments.sort(orderAlpha));
  }, [allTemperaments]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handlerChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
    setErrors(
      validation({
        ...newDog,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setTemperament(
      temperaments.filter((el) => parseInt(el.id) !== parseInt(e.target.value))
    );

    let addedTemperament = {
      id: e.target.value,
      name: e.target.name,
    };
    setNewDog({
      ...newDog,
      temperament: [...newDog.temperament, addedTemperament],
    });
  };

  const handlerClick2 = (e) => {
    e.preventDefault();

    let addTemperament = {
      id: e.target.value,
      name: e.target.name,
    };

    let filtered = newDog.temperament.filter(
      (el) => parseInt(el.id) !== parseInt(e.target.value)
    );

    setNewDog({ ...newDog, temperament: filtered });

    setTemperament([...temperaments, addTemperament].sort(orderAlpha));
  };

  const handlerClick3 = (e) => {
    e.preventDefault();
    dispatch(createNewDog(newDog));
    setIsSubmit(true);
    setNewDog({
      name: "",
      image: "",
      height: "",
      weight: "",
      life_span: "",
      temperament: [],
      origin: "",
    });
    dispatch(Dogs());
  };

  const isButtonDisabled = !Object.values(newDog).every(
    (value) => value !== "" && value !== []
  );

  return (
    <form className="container-form">
      <div className="container-input-form">
        <div className="container-input">
          <input
            type="text"
            name="name"
            value={newDog.name}
            onChange={handlerChange}
            className="input-create"
            placeholder="Nombre"
            autoComplete="off"
          />
          {errors.name ? <p>❌{errors.name}</p> : null}
        </div>
        <div className="container-input">
          <input
            type="text"
            name="image"
            value={newDog.image}
            onChange={handlerChange}
            className="input-create"
            placeholder="Ingresa URL"
            autoComplete="off"
          />
          {errors.image ? <p>❌{errors.image}</p> : null}
        </div>
        <div className="container-input">
          <input
            type="text"
            name="height"
            value={newDog.height}
            onChange={handlerChange}
            className="input-create"
            placeholder="Altura: min-max"
            autoComplete="off"
          />
          {errors.height ? <p>❌{errors.height}</p> : null}
        </div>

        <div className="container-input">
          <input
            type="text"
            name="weight"
            value={newDog.weight}
            onChange={handlerChange}
            className="input-create"
            placeholder="Peso: min-max"
            autoComplete="off"
          />
          {errors.weight ? <p>❌{errors.weight}</p> : null}
        </div>

        <div className="container-input">
          <input
            type="text"
            name="life_span"
            value={newDog.life_span}
            onChange={handlerChange}
            className="input-create"
            placeholder="Años de Vida: min-max"
            autoComplete="off"
          />
          {errors.life_span ? <p>❌{errors.life_span}</p> : null}
        </div>

        <div className="container-input">
          <input
            type="text"
            name="origin"
            value={newDog.origin}
            onChange={handlerChange}
            className="input-create"
            placeholder="Origen: pais"
            autoComplete="off"
          />
          {errors.origin ? <p>❌{errors.origin}</p> : null}
        </div>
      </div>
      <h5> ELIJE LOS TEMPERAMENTOS DE TU PERRO:</h5>
      <div className="container-temperaments">
        {temperaments.map((temp) => {
          return (
            <button
              key={temp.id}
              value={temp.id}
              name={temp.name}
              className="btn-temperaments"
              onClick={handlerClick}
            >
              {temp.name}
            </button>
          );
        })}
      </div>
      <div className="containerNewDog">
        {newDog.temperament.map((temp) => {
          return (
            <button
              key={temp.id}
              value={temp.id}
              name={temp.name}
              className="btn-temperament-newDog"
              onClick={handlerClick2}
            >
              {temp.name}
            </button>
          );
        })}
      </div>

      <button
        type="submit"
        onClick={handlerClick3}
        className="btn-submit"
        disabled={isButtonDisabled}
      >
        {isSubmit ? "CREADO CON EXITO!" : "CREAR PERRO"}
      </button>
    </form>
  );
}

export default CreateDog;
