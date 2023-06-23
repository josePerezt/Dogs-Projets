const { Router } = require("express");
const routerAllBreeds = require("./routerAllBreeds.js");
const routerDogBreed = require("./routerDogBreed");
const routerNameBreed = require("./routerNameBreed");
const routerCreateDogs = require("./routerCreateDogs");
const routerTemperaments = require("./routerTemperaments");
// const getDogRaces = require("../controllers/getDogRaces");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", routerAllBreeds);
router.get("/dogs/name", routerNameBreed);
router.get("/dogs/:idBreed", routerDogBreed);
router.post("/dogs", routerCreateDogs);
router.get("/temperaments", routerTemperaments);

module.exports = router;
