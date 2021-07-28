const seedUsers = require('./user-seeds');
const seedQuiz = require('./quiz-seeds');
const seedQuestions = require('./questions-seeds');

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


  

  process.exit(0);
};

seedAll();
  