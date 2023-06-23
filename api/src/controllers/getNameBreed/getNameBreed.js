const { Dog, Temperament } = require("../../db");

const getNameBreedApi = require("./getNameBreedApi");

const getNameBreed = async (query) => {
  const nameBreedDB = await Dog.findAll({
    where: { name: query },
    include: [
      {
        model: Temperament,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    ],
  });

  if (nameBreedDB) {
    const dogData = nameBreedDB.map((dog) => {
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
      };
    });
    return dogData;
  } else {
    return null;
  }
};

module.exports = getNameBreed;
