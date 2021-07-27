const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    choices: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInteger: true
        }
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        references: {
          model:'quiz',
          key:'id'
        }
      }
    
    
  },

  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'questions'
  }
);

module.exports = Questions;