    const {Model, DataTypes} = require('sequelize');
    const connection = require('../DataBase/connection');

    class category extends Model{}

    category.init({
        categoryId: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true
        },
        categoryName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        CategoryDescription:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize:connection,
        modelName: 'category',
        paranoid: true,
        deletedAt: 'destroyTime'
    });

    module.exports = category;