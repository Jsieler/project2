const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model { }

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
    choices1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choices2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choices3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choices4: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    quiz_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quiz',
        key: 'id'
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