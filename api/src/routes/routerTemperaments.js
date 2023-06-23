const { Router } = require("express");
const getTemperamentsTable = require("../controllers/getTemperaments/getTemperamentsTable");

const routerTemperaments = Router();

routerTemperaments.get("/temperaments", async (req, res) => {
  try {
    const temperaments = await getTemperamentsTable();
    if (!temperaments) throw new Error("No hay temperamentos en la DB");
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = routerTemperaments;
