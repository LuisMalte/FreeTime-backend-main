const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class Task extends Model {}

Task.init(
  {
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true

    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taskDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    offer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taskTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
     fulltimerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
     }

  },
  {
    sequelize: connection,
    modelName: 'task',
    paranoid: true,
    deleteAt: 'destroyTime'

  }
);

module.exports = Task;
