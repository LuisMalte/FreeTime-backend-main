const { Sequelize } = require('sequelize');

var dataBase = 'freetimeDB';
var userName = 'postgres';
var password = '96857412';

const connection = new Sequelize(dataBase, userName, password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;
