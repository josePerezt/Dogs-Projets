import {
  DOGS,
  NAME_DOGS,
  DOG_ID,
  GET_TEMPERAMENTS,
  FILTER_DOG_TEMPERAMENT,
  ORDER_DOG,
  ORDER_WEIGHT,
  BACK_PAGE,
  NEXT_PAGE,
  NEW_DOG,
  FILTER_BDD,
} from "./type";
import axios from "axios";

//accion para traer todos los perros
export const Dogs = () => {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/dogs");
    dispatch({ type: DOGS, payload: data });
  };
};

//accion para traer el perro por nombre
export const NameDogs = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        `http://localhost:3001/dogs/name?name=${name}`
      );
      dispatch({ type: NAME_DOGS, payload: data });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert(
          "Nose se encontro la raza, puedes crearla en la seccion de 'CREAR PERRO'"
        );
      } else {
        alert("Ocurrio un error");
      }
    }
  };
};

//accion para traer al perro por id
export const getIdDog = (id) => {
  return async function (dispatch) {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);
    dispatch({ type: DOG_ID, payload: data });
  };
};

//accion para traer los temperamentos
export const getTemperaments = () => {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/temperaments");
    dispatch({ type: GET_TEMPERAMENTS, payload: data });
  };
};

//accion para hacer conseguir por temperamentos
export const filterDogs = (temperament) => {
  return function (dispatch) {
    dispatch({ type: FILTER_DOG_TEMPERAMENT, payload: temperament });
  };
};

export const filterBDD = (boolean) => {
  return function (dispatch) {
    dispatch({ type: FILTER_BDD, payload: boolean });
  };
};

//accion para orden alfabetico
export const orderDogs = (order) => {
  return function (dispatch) {
    dispatch({ type: ORDER_DOG, payload: order });
  };
};

//accion para ordernar por peso
export const orderWeight = (orderWeight) => {
  return function (dispatch) {
    dispatch({ type: ORDER_WEIGHT, payload: orderWeight });
  };
};

// accion para volver a la pagina anterior
export const backPage = () => {
  return function (dispatch) {
    dispatch({ type: BACK_PAGE });
  };
};

// accion para ir a la siguiente pagina
export const nextPage = () => {
  return function (dispatch) {
    dispatch({ type: NEXT_PAGE });
  };
};

//action para agregar un nuevo dog a la BD.

export const createNewDog = (newDog) => {
  return async function (dispatch) {
    const { data } = await axios.post("http://localhost:3001/dogs", newDog);
    dispatch({ type: NEW_DOG, payload: data });
  };
};
