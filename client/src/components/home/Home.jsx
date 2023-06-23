import CardsDogs from "../cardsDogs/CardsDogs";
import { useSelector } from "react-redux";
import Temperaments from "../temperaments/Temperaments";
import OrderAlpha from "../orderAlpha/OrderAlpha";
import "./Home.css";
import OrderWeight from "../orderWeight/OrderWeight";
import ButtonCheck from "../buttonCheck/ButtonCheck";
// import { useEffect } from "react";
import Loader from "../loader/Loader";

function Cucha() {
  const { Dogsinicio, selectedTemperaments, currentPage, numberOfDogs } =
    useSelector((state) => state);

  if (Dogsinicio.length === 0 && selectedTemperaments.length > 0) {
    return (
      <div>
        <div className="home-filtros">
          <Temperaments selectedTemperaments={selectedTemperaments} />
          <OrderAlpha />
          <OrderWeight />
          <ButtonCheck />
        </div>
        <p className="warning">No existen Perros con dichos temperamentos</p>;
      </div>
    );
  }
  return (
    <div className="container-home">
      {!Dogsinicio.length ? (
        <Loader />
      ) : (
        <>
          <div className="home-filtros">
            <Temperaments selectedTemperaments={selectedTemperaments} />
            <OrderAlpha />
            <OrderWeight />
            <ButtonCheck />
          </div>
          <div className="home-cards">
            <CardsDogs
              Dogsinicio={Dogsinicio}
              currentPage={currentPage}
              numberOfDogs={numberOfDogs}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Cucha;
