const { Temperament } = require("../../db");

const getTemperamentsTable = async () => {
  const arrayTemperaments = await Temperament.findAll();
  return arrayTemperaments;
};

module.exports = getTemperamentsTable;
