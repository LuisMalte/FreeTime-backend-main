const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class fulltimer extends Model {}

fulltimer.init(
  {
    fulltimerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize: connection,
    paranoid: true, 
    modelName: 'fulltimer'
  }
);

module.exports = fulltimer;
