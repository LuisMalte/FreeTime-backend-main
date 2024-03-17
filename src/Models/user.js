
const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class user extends Model {}

user.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    userPhone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cityId:{
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: 'user',
    paranoid: true,
    deleteAt: 'destroyTime'
  }
);

module.exports = user;
