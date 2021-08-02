const sequelize = require('../config/connection');
const { Quiz } = require('../models');

const quizdata = [
{
    quiz_name: "Hogwarts School of Witchcraft and Wizardry House Selection Quiz"
}
];

const seedQuiz = () => Quiz.bulkCreate(quizdata, {individualHooks: true});

module.exports = seedQuiz;