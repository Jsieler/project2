const User = require('./User');
const Quiz = require('./Quiz');
const Questions = require('./Questions');


// Questions belongs to Quiz
Questions.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'SET NULL'
  });

  Quiz.hasMany(Questions, {
    foreignKey: 'quiz_id'
  });

module.exports = { User, Quiz, Questions };