const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class paymenthistory extends Model {}

fulltimer.init(
  {
    paymenthistoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,

      },
    freetimerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
  },
  {
    sequelize: connection,
    modelName: 'paymenthistory'
  }
);

module.exports = fulltimer;
