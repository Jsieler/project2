const seedUsers = require('./user-seeds');
const seedQuiz = require('./quiz-seeds');
const seedQuestions = require('./questions-seeds');
const seedHouses = require('./houses-seeds');
const seedWizards = require('./wizards-seeds');
const seedSpells = require('./spells-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedQuiz();
  console.log('--------------');
  await seedQuestions();
  console.log('--------------');
  await seedHouses();
  console.log('--------------');
  await seedWizards();
  console.log('--------------');
  await seedSpells();
  console.log('--------------');
  

  process.exit(0);
};

seedAll();
  