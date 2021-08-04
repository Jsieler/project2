const User = require('./User');
const Quiz = require('./Quiz');
const Questions = require('./Questions');
const Houses = require('./Houses');
const Wizards = require('./Wizards');
const Spells = require('./Spells');

// Questions belongs to Quiz
Questions.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'SET NULL'
  });

  Quiz.hasMany(Questions, {
    foreignKey: 'quiz_id'
  });


Wizards.belongsTo(Houses, {
  foreignKey: 'houses_id',
  onDelete: 'SET NULL'
});

Houses.hasMany(Wizards, {
  foreignKey: 'houses_id',
  onDelete: 'SET NULL'
})

module.exports = { User, Quiz, Questions, Houses, Wizards, Spells};