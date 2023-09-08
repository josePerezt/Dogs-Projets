const { Router } = require("express");
const getAllBreeds = require("../controllers/getAllBreeds/getAllBreeds");
const getAllBreedsDB = require("../controllers/getAllBreeds/getAllBreedsDB");

routerAllBreeds = Router();

routerAllBreeds.get("/dogs", async (req, res) => {
  try {
    const allDogsBD = await getAllBreedsDB();
    const allDogsApi = await getAllBreeds();

    const allDogs = allDogsApi.concat(allDogsBD);
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = routerAllBreeds;
