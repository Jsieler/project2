const User = require('./User');
const Quiz = require('./Quiz');
const Questions = require('./Questions');
const Personality = require('./Personality');

// Questions belongs to Quiz
Questions.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'SET NULL'
  });

  Personality.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Personality.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'SET NULL'
  });

module.exports = { User, Quiz, Questions, Personality };