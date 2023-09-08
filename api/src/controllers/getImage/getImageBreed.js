require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getImageBreed = async (id) => {
  const { data } = await axios(`https://api.thedogapi.com/v1/images`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  const { url } = data;
  return url;
};

module.exports = getImageBreed;
