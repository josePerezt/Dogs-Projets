const dogsData = async (id) => {
  const res = await axios(`https://api.thedogapi.com/v1/images/${id}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return res;
};

module.exports = dogsData;
