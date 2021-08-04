const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wizards extends Model {}

Wizards.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    houses_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'houses',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'wizards',
  }
);

module.exports = Wizards;