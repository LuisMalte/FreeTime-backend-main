const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class taskType extends Model {}

taskType.init({
  taskTypeId: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true
  },
  taskTypeName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taskTypeDescription: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: connection,
  modelName: 'taskType',
  paranoid: true,
  deletedAt: 'destroyTime'
});

module.exports = taskType;
