const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Spells extends Model {}

Spells.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
   spell_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spell_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spell_affect: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'spells',
  }
);

module.exports = Spells;