require('./DataBase/sync.js');


const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

//routers
const userrouter = require('./Routers/userrouter.js');
const fulltimerrouter = require('./Routers/fulltimerrouter.js');
const freetimerrouter = require('./Routers/feetimerrouter.js');
const categoryrouter = require('./Routers/categoryrouter.js');
const tasktyperouter = require('./Routers/tasktyperouter.js');
const taskrouter = require('./Routers/taskrouter.js');
const departmentrouter = require('./Routers/departmentrouter.js');
const cityrouter = require('./Routers/cityrouter.js')


app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use(cors({
    origin: 'http://localhost:3001'
  }));


app.listen(port, ()=> {
    console.log("The application is running on port: " + port);
})

//api
app.use('/api', userrouter);
app.use('/api', fulltimerrouter);
app.use('/api', freetimerrouter);
app.use('/api', categoryrouter);
app.use('/api', tasktyperouter);
app.use('/api', taskrouter);
app.use('/api', departmentrouter);
app.use('/api', cityrouter);