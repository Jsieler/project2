const { Houses } = require('../models');

const housesData = [
  {
    house_name: 'Gryffindor',
  },
  {
    house_name: 'Hufflepuff',
  },
  {
    house_name: 'Ravenclaw',
  },
  {
    house_name: 'Slytherin',
  },

];

const seedHouses = () => Houses.bulkCreate(housesData);

module.exports = seedHouses;