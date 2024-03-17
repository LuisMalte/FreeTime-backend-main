require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//routers
const userrouter = require('./Routers/userrouter.js');
const fulltimerrouter = require('./Routers/fulltimerrouter.js');
const freetimerrouter = require('./Routers/feetimerrouter.js');
const categoryrouter = require('./Routers/categoryrouter.js');
const tasktyperouter = require('./Routers/tasktyperouter.js');

// const productrouter = require('./Routers/productrouter.js');
// const departmentrouter = require('./Routers/departmentrouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(port, ()=> {
    console.log("The application is running on port: " + port);
})

//api
app.use('/api', userrouter);
app.use('/api', fulltimerrouter);
app.use('/api', freetimerrouter);
app.use('/api', categoryrouter);
app.use('/api', tasktyperouter);