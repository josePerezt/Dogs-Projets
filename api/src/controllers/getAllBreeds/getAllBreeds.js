require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getAllBreeds = async () => {
  const { data } = await axios("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  const dogData = data.map((dog) => {
    const { id, name, life_span, temperament, weight, height, origin, image } =
      dog;
    return {
      id,
      name,
      life_span,
      temperament,
      weight: weight.metric,
      height: height.metric,
      origin,
      image: image.url,
    };
  });
  return dogData;
};

module.exports = getAllBreeds;
