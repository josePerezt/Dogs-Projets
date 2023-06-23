import { useDispatch } from "react-redux";
import { filterDogs } from "../../redux/actions";
import { useSelector } from "react-redux";
import "./Temperaments.css";
import { useEffect, useState } from "react";

function Temperaments() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.allTemperaments);
  const allTemperamentsSelect = useSelector(
    (state) => state.selectedTemperaments
  );

  const [memoTemperaments, setMemoTemperaments] = useState([]);
  const [selectedTemperaments, setSelectedTemperamets] = useState([]);

  useEffect(() => {
    setMemoTemperaments(allTemperaments);
  }, [allTemperaments]);

  useEffect(() => {
    setSelectedTemperamets(allTemperamentsSelect);
  }, [allTemperamentsSelect]);

  const handlerChange = (event) => {
    const selectedIndex = event.target.selectedIndex;

    const selectId = event.target.options[selectedIndex].id;

    let temperamentSelect = {
      id: selectId,
      name: event.target.value,
    };
    let filterMemoTemperaments = memoTemperaments.filter(
      (temp) => parseInt(temp.id) !== parseInt(selectId)
    );
    let selected = [...selectedTemperaments, temperamentSelect];

    setMemoTemperaments(filterMemoTemperaments);
    setSelectedTemperamets(selected);

    dispatch(filterDogs(selected));
  };

  const handlerClick = (e) => {
    e.preventDefault();

    let desSelect = {
      id: e.target.id,
      name: e.target.value,
    };

    let filterBotonSelect = selectedTemperaments.filter(
      (select) => parseInt(select.id) !== parseInt(desSelect.id)
    );
    let disorderArray = [...memoTemperaments, desSelect];

    setMemoTemperaments(disorderArray.sort((a, b) => a.id - b.id));

    setSelectedTemperamets(filterBotonSelect);

    dispatch(filterDogs(filterBotonSelect));
  };

  return (
    <div className="container-select">
      <label className="title-temperament">Temperamentos: </label>
      <select
        className="select-temperament"
        onChange={handlerChange}
        key="hgkjgh"
      >
        <option key={""} value={""} className="option-temperament">
          Todos
        </option>
        {memoTemperaments.map((temperament) => (
          <option
            id={temperament.id}
            key={temperament.id}
            value={temperament.name}
            className="option-temperament"
          >
            {temperament.name}
          </option>
        ))}
      </select>
      <div>
        {selectedTemperaments?.map((temp) => (
          <button
            id={temp.id}
            key={temp.id}
            value={temp.name}
            onClick={handlerClick}
            className="btn-select-temp"
          >
            {temp.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Temperaments;
