const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Houses extends Model {}

Houses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
   house_name: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'houses',
  }
);

module.exports = Houses;