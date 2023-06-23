require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getTemperamentsApi = async () => {
  const { data } = await axios("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  // Obtenemos el array de todos los temperamentos en string
  let temperaments = data.map((dato) => {
    //consultamos si tenemos un el objeto con un valor true en su propiedad temperament sino retornamos un array vacio.
    if (dato.temperament) {
      //separamos cada items y lo tranformamos en un array luego eliminamos todos los espacios en blanco
      return dato.temperament.split(", ").map((item) => item.trim());
    }
    return [];
  });
  const simplifyTemperaments = (array) => {
    let arrayOfDuplicateTemperaments = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        arrayOfDuplicateTemperaments.push(array[i][j]);
      }
    }

    let resulTemperaments = [...new Set(arrayOfDuplicateTemperaments)];

    // retornamos los elemento unicos depsues de utilizar el metodo set anteriormente
    return resulTemperaments;
  };

  return simplifyTemperaments(temperaments);
};

module.exports = getTemperamentsApi;
