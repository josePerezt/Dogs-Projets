const { Router } = require("express");
const postCreateDogs = require("../controllers/postCreateDog/postCreateDogs");

const routerCreateDogs = Router();

routerCreateDogs.post("/dogs", async (req, res) => {
  const { name, image, height, weight, life_span, origin, temperament } =
    req.body;
  try {
    const createDog = await postCreateDogs(
      name,
      image,
      height,
      weight,
      life_span,
      temperament,
      origin
    );
    res.status(200).json(createDog);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = routerCreateDogs;
