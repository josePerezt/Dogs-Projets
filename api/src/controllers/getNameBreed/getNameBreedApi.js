require("dotenv").config();
const axios = require("axios");

const { API_KEY } = process.env;

const getNameBreedApi = async (nameQuery) => {
  const { data } = await axios
    .get(`https://api.thedogapi.com/v1/breeds`, {
      headers: {
        "x-api-key": API_KEY,
      },
    })
    .catch((err) => {
      console.log(err);
    });

  const arrayNew = data.filter((el) => {
    return el.name && el.name.toLowerCase().includes(nameQuery);
  });

  const nameBreed = arrayNew.map(
    ({ id, name, image, height, weight, life_span, temperament }) => {
      return {
        id,
        name,
        image: image.url,
        height: height.metric,
        weight: weight.metric,
        life_span,
        temperament,
      };
    }
  );

  return nameBreed;
};

module.exports = getNameBreedApi;
