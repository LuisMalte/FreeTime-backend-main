const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class freetimer extends Model {}

freetimer.init(
  {
    freetimerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },

    healthInsurance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        isTrue(value) {
          if (!value) {
            throw new Error('Health insurance must be true.');
          }
        }
      }
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: 'freetimer',
    paranoid: true,
    deletedAt: 'destroyTime'

  }
);

module.exports = freetimer;
