const { Temperament } = require("../../db");
const getTemperamentsApi = require("./getTemperamentsApi");

const tableTemperament = async () => {
  const table = await getTemperamentsApi();
  const itemsTable = table.map((name) => ({ name: name }));
  const registros = await Temperament.bulkCreate(itemsTable);
  return registros;
};

module.exports = tableTemperament;
