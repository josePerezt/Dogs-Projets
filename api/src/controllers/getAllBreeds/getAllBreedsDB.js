const { Dog, Temperament } = require("../../db");
// const getAllBreeds = require("./getAllBreeds");

const getAllBreedsDB = async () => {
  const allBreeds = await Dog.findAll({
    include: [
      {
        model: Temperament,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    ],
  });

  if (allBreeds) {
    const dogData = allBreeds.map((dog) => {
      const temperaments = dog.temperaments.map((temp) => temp.name).join(", ");

      return {
        id: dog.id,
        name: dog.name,
        image: dog.image,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.life_span,
        origin: dog.origin,
        temperament: temperaments,
        createBD: dog.createBD,
      };
    });
    return dogData;
  } else null;
};

module.exports = getAllBreedsDB;
