const { Wizards } = require('../models');

const wizardsData = [
  {
    first_name: 'Harry',
    last_name: 'Potter',
    houses_id: 1
  },
  {
    first_name: 'Albus',
    last_name: 'Dumbledore',
    houses_id: 1
  },
  {
    first_name: 'Tom',
    last_name: 'Riddle',
    houses_id: 4
  },
  {
    first_name: 'Salazar',
    last_name: 'Slytherin',
    houses_id: 4
  },
  {
    first_name: 'Godric',
    last_name: 'Gryffindor',
    houses_id: 1
  },
  {
    first_name: 'Severus',
    last_name: 'Snape',
    houses_id: 4
  },
  {
    first_name: 'Sirius',
    last_name: 'Black',
    houses_id: 1
  },
  {
    first_name: 'Newt',
    last_name: 'Scamander',
    houses_id: 1
  },
  {
    first_name: 'Hermione',
    last_name: 'Granger',
    houses_id: 1
  },
  {
    first_name: 'Helga',
    last_name: 'Hufflepuff',
    houses_id: 2
  },
  {
    first_name: 'Minerva',
    last_name: 'McGonagall',
    houses_id: 1
  },
  {
    first_name: 'Luna',
    last_name: 'Lovegood',
    houses_id: 3
  },
  {
    first_name: 'Ignatia',
    last_name: 'Wildsmith',
    houses_id: 3
  },
  {
    first_name: 'Garrick',
    last_name: 'Ollicander',
    houses_id: 3
  },
  {
    first_name: 'Bellatrix',
    last_name: 'Lestrange',
    houses_id: 4
  },
  {
    first_name: 'Lucius',
    last_name: 'Malfoy',
    houses_id: 4
  },
  {
    first_name: 'Pomona',
    last_name: 'Sprout',
    houses_id: 2
  },
];

const seedWizards = () => Wizards.bulkCreate(wizardsData);

module.exports = seedWizards;