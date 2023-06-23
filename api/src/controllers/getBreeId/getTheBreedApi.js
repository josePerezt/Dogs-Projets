require("dotenv").config();
const axios = require("axios");
const getImageBreed = require("../getImage/getImageBreed");
const { API_KEY } = process.env;

const getTheBreedApi = async (id) => {
  const { data } = await axios(`https://api.thedogapi.com/v1/breeds`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  const dogFind = data.find((dog) => {
    return dog.id === parseInt(id);
  });

  if (!dogFind) return {};

  const { name, image, height, weight, life_span, temperament, origin } =
    dogFind;
  const dogBreed = {
    id,
    image: image.url,
    name,
    height: height.metric,
    weight: weight.metric,
    life_span,
    origin,
    temperament,
  };
  return dogBreed;
};

module.exports = getTheBreedApi;
