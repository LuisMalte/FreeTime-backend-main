
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
    FullName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cityId:{
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },cityId:{
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
