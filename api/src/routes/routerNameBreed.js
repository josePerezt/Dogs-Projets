const { Router } = require("express");
const getNameBreed = require("../controllers/getNameBreed/getNameBreed");
const getNameBreedApi = require("../controllers/getNameBreed/getNameBreedApi");

routerBreedName = Router();

routerBreedName.get("/dogs/name", async (req, res) => {
  const { name } = req.query;
  let nameQuery = name.toLowerCase();
  try {
    const nameBreedBD = await getNameBreed(nameQuery);
    const nameBreedApi = await getNameBreedApi(nameQuery);
    const nameBreed = nameBreedBD.concat(nameBreedApi);

    if (nameBreed.length) return res.status(200).json(nameBreed);
    res.status(404).json({ Error: "Breed Not Found" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = routerBreedName;
