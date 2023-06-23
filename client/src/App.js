import { Route, Routes, useLocation } from "react-router";
import Start from "./components/start/Start";
import Cucha from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import CreateDog from "./components/createDog/CreateDog";
import DetailDog from "./components/detailDog/DetailDog";

import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dogs, getTemperaments } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  let location = useLocation();

  //Despues que el componente esta cargado se realiza un dispath para  mostrar los primeros perros
  useEffect(() => {
    dispatch(Dogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="detail" element={<DetailDog />} />
        <Route path="detail/:detailId" element={<DetailDog />} />
        <Route path="Cucha" element={<Cucha />} />
        <Route path="crear-perro" element={<CreateDog />} />
      </Routes>
    </div>
  );
}

export default App;
