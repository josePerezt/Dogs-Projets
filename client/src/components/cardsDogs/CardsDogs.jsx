import React from "react";
import CardDog from "../cardDog/CardDog";
import ButtonBack from "../buttonBack/ButtonBack";
import ButtonNext from "../buttonNext/ButtonNext";
import "./CardsDogs.css";
import { useDispatch } from "react-redux";
import { backPage, nextPage } from "../../redux/actions";

function CardsDogs({ Dogsinicio, currentPage, numberOfDogs }) {
  const dispatch = useDispatch();

  //indice para la paginas a mostrar
  const startIndex = (currentPage - 1) * numberOfDogs;
  const endIndex = startIndex + numberOfDogs;
  const dogs = Dogsinicio.slice(startIndex, endIndex);

  const handlerClickNext = () => {
    dispatch(nextPage());
    window.scrollTo(0, 0);
  };

  const handlerClickBack = () => {
    dispatch(backPage());
    window.scrollTo(0, 0);
  };
  return (
    <div className="container-dogs">
      <div className="container-cards">
        {dogs.map(({ id, name, image, weight, temperament }) => {
          return (
            <CardDog
              name={name}
              image={image}
              weight={weight}
              temperament={temperament}
              id={id}
              key={id}
            />
          );
        })}
      </div>
      <div className="container-btn">
        {currentPage === 1 ? null : (
          <ButtonBack
            handlerClickBack={handlerClickBack}
            dogs={dogs}
            currentPage={currentPage}
          />
        )}

        {dogs.length < 8 ? null : <p className="number-page">{currentPage}</p>}
        {dogs.length < 8 ? null : (
          <ButtonNext handlerClickNext={handlerClickNext} dogs={dogs} />
        )}
      </div>
    </div>
  );
}

export default CardsDogs;
