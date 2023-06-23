require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getAllBreeds = async () => {
  const { data } = await axios("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const dogData = data.map(
    ({ id, image, name, height, weight, life_span, temperament }) => ({
      id,
      image: image.url,
      name,
      height: height.metric,
      weight: weight.metric,
      life_span,
      temperament,
      createBD: false,
    })
  );
  return dogData;
};

module.exports = getAllBreeds;
