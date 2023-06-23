import {
  DOGS,
  DOG_ID,
  NAME_DOGS,
  GET_TEMPERAMENTS,
  FILTER_DOG_TEMPERAMENT,
  ORDER_DOG,
  ORDER_WEIGHT,
  BACK_PAGE,
  NEXT_PAGE,
  NEW_DOG,
  FILTER_BDD,
} from "./type";

const initialState = {
  allTemperaments: [],
  selectedTemperaments: [],
  Dogsinicio: [],
  AllDogs: [],
  idDog: {},
  currentPage: 1,
  numberOfDogs: 8,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DOGS:
      return {
        ...state,
        Dogsinicio: action.payload,
        AllDogs: action.payload,
      };
    case NAME_DOGS: {
      return {
        ...state,
        Dogsinicio: action.payload,
        currentPage: 1,
      };
    }
    case DOG_ID:
      return {
        ...state,
        idDog: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };

    case FILTER_DOG_TEMPERAMENT:
      if (action.payload === "Todos") {
        return {
          ...state,
          Dogsinicio: state.AllDogs,
        };
      }
      const filteredDogs = state.AllDogs.filter((dog) => {
        let dogTempArray = dog.temperament
          ? dog.temperament.split(", ")
          : false;
        if (dogTempArray !== false) {
          let actionPayload = action.payload.map((nameTemp) => nameTemp.name);

          let arraValues = actionPayload.every((valor) =>
            dogTempArray.includes(valor)
          );

          if (arraValues) {
            return dog;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });

      return {
        ...state,
        Dogsinicio: filteredDogs,
        selectedTemperaments: action.payload,
        currentPage: 1,
      };

    case FILTER_BDD:
      const filteredBDD = state.AllDogs.filter((dog) => {
        return dog.createBD === true;
      });
      const filteredApi = state.AllDogs.filter((dog) => {
        return dog.createBD !== true;
      });
      return {
        ...state,
        Dogsinicio: action.payload ? filteredBDD : filteredApi,
        currentPage: 1,
      };

    case ORDER_DOG:
      const order = [...state.Dogsinicio].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (action.payload === "A - Z") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        } else {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
      });
      return {
        ...state,
        Dogsinicio: order,
      };
    case ORDER_WEIGHT:
      // El ordenamiento por peso se tendran en cuenta sus dos parametro min- max, si ambos min son iguales se evaluara el peso maximo de ambos para su ordenamiento
      const orderDogWeight = [...state.Dogsinicio].sort((a, b) => {
        const pesoA_min = parseInt(a.weight.split("-")[0]);
        const pesoB_min = parseInt(b.weight.split("-")[0]);
        const pesoA_max = parseInt(a.weight.split("-")[1]);
        const pesoB_max = parseInt(b.weight.split("-")[1]);
        if (action.payload === "Menor-Mayor") {
          if (pesoA_min < pesoB_min) return -1;
          if (pesoA_min > pesoB_min) return 1;
          if (pesoA_min === pesoB_min) return pesoA_max - pesoB_max;
        } else {
          if (pesoA_min > pesoB_min) return -1;
          if (pesoA_min < pesoB_min) return 1;
          if (pesoA_min === pesoB_min) return pesoB_max - pesoA_max;
        }
        return 0;
      });
      return {
        ...state,
        Dogsinicio: orderDogWeight,
      };

    case BACK_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case NEW_DOG:
      return {
        ...state,
        Dogsinicio: [...state.Dogsinicio],
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
