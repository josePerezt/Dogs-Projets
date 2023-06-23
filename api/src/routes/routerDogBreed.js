const { Router } = require("express");
const getTheBreed = require("../controllers/getBreeId/getTheBreed");
const getTheBreedApi = require("../controllers/getBreeId/getTheBreedApi");
const routerDogBreed = Router();

routerDogBreed.get("/dogs/:idRaza", async (req, res) => {
  const { idRaza } = req.params;
  try {
    if (idRaza.length > 6) {
      let dogFound = await getTheBreed(idRaza);
      res.status(200).json(dogFound);
    } else {
      let dogFoundApi = await getTheBreedApi(idRaza);
      res.status(200).json(dogFoundApi);
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = routerDogBreed;
