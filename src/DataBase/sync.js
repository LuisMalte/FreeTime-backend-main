const connection = require('./connection');

//Models
const user = require('../Models/user');
const freetimer = require('../Models/freetimer');
const fulltimer = require('../Models/fulltimer');
const department = require('../Models/department');
const city = require('../Models/city');
const category = require('../Models/category');
const task = require('../Models/task');
const taskType = require('../Models/tasktype');


//JSON
const departamentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');
const categoryjson = require('./jsonfiles/categoryjson');
const taskTypejson = require('./jsonfiles/tasktypejson');

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


      // relacion muchos a muchos entre freetime y categorias
    category.hasMany(freetimer,{
        foreignKey: 'categoryId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    freetimer.belongsTo(category,{
        foreignKey: 'categoryId'
    });

    // relacion uno a uno entre freetimer y user
    freetimer.belongsTo(user, { foreignKey: 'userId' });
    user.hasOne(freetimer, { foreignKey: 'userId' });


    // relacion uno a uno entre fulltimer y user
    fulltimer.belongsTo(user, { foreignKey: 'userId' });
    user.hasOne(fulltimer, { foreignKey: 'userId' });


  

      //relacion uno a muchos entre tipo de tarea y tareas
    taskType.hasMany(task,{
        foreignKey: 'taskId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    task.belongsTo(taskType,{
        foreignKey: 'taskTypeId'
    });
    

    task.belongsTo(freetimer, { foreignKey: 'freetimerId' });
    freetimer.hasOne(task, { foreignKey: 'freetimerId' });

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
    categoryjson.createCategories()
    taskTypejson.createTaskTypes()

}

sync();

