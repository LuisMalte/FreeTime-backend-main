const connection = require('./connection');

//Models
const user = require('../Models/user');
const freetimer = require('../Models/freetimer');
const department = require('../Models/department');
const city = require('../Models/city');
const category = require('../Models/category');


//JSON
const departamentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');
const categoryjson = require('./jsonfiles/categoryjson');

async function sync(){
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

      // Define Many-to-Many Relationship between freetimer and category using a join table
    freetimer.belongsToMany(category, { through: 'FreetimerCategory', foreignKey: 'freetimerId' });
    category.belongsToMany(freetimer, { through: 'FreetimerCategory', foreignKey: 'categoryId' })


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
    categoryjson.createCategory();

}

sync();

