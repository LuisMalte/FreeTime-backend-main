const express = require('express');
const taskcontroller = require('../Controllers/taskcontroller');
const router = express.Router();
const authenticateToken = require('../Middleware/authenticateTokenUser'); 

//todos los tokens son del login usuario

router.post('/createTask', authenticateToken, taskcontroller.createTask);
router.get('/listTasks',authenticateToken,  taskcontroller.listTasks);
router.put('/updateTask/:taskId',authenticateToken, taskcontroller.updateTask);
router.put('/disableTask/:taskId', authenticateToken, taskcontroller.disableTask);
router.put('/enableTask/:taskId', authenticateToken, taskcontroller.enableTask);
router.get('/listTasksByFreetimer/:fulltimerId', authenticateToken, taskcontroller.listTasksByFulltimer);
router.get('/listTasksByTaskTypes/:taskTypeId', authenticateToken, taskcontroller.listTasksByTaskTypes);
router.get('/gettask/:taskId', taskcontroller.getTask);



module.exports = router;