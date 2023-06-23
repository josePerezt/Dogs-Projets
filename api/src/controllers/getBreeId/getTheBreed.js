const { Dog, Temperament } = require("../../db");

const getTheBreed = async (id) => {
  const dogBreed = await Dog.findOne({
    where: { id: id },
    include: [
      {
        model: Temperament,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    ],
  });

  if (dogBreed) {
    const dogData = dogBreed.toJSON();
    const temperaments = dogData.temperaments
      .map((temp) => temp.name)
      .join(", ");
    dogData.temperament = temperaments;
    delete dogData.temperaments;
    return dogData;
  } else {
    return {};
  }
};

module.exports = getTheBreed;
