const { Dog } = require("../../db");

const postCreateDogs = async (
  name,
  image,
  height,
  weight,
  life_span,
  temperament,
  origin
) => {
  //Se evalua que tengamos todos los datos necesarios para crear el DOG
  if (!name || !image || !height || !weight || !life_span || !origin)
    throw new Error("missing data");

  // creamos el New dog
  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
    origin,
  });

  let temp = temperament.map((el) => el.id);
  newDog.addTemperaments(temp);

  //Retornamos el nuevo Dog,
  return newDog;
};

module.exports = postCreateDogs;
