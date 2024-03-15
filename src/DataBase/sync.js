const connection = require('./connection');

//Models
const user = require('../Models/user');
// const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city');

//JSON
const departamentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');

async function sync(){
    //Foreign Key user - product
    // user.hasMany(product,{
    //     foreignKey: 'userId',
    //     onDelete: 'restrict',
    //     onUpdate:'cascade'
    // });
    // product.belongsTo(user,{
    //     foreignKey: 'userId'
    // });

    //Foreign Key departament - city
    department.hasMany(city, {
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    })

    //Foreign Key city - user
    city.hasMany(user,{
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    user.belongsTo(city,{
        foreignKey: 'cityId'
    });

    await connection.sync({force: false})
    .then(() => { 
        console.log('Synchronized DataBase');
    })
    .catch((error) => { 
        console.error('Error syncing DataBase' + error);
    }); 

    //create json
    departamentjson.createDepartments();
    cityjson.createCities();
}

sync();

