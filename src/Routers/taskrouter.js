const express = require('express');
const taskcontroller = require('../Controllers/taskcontroller');
const router = express.Router();

router.post('/createTask', taskcontroller.createTask);
router.get('/listTasks', taskcontroller.listTasks);
router.put('/updateTask/:taskId', taskcontroller.updateTask);
router.put('/disableTask/:taskId', taskcontroller.disableTask);
router.put('/enableTask/:taskId', taskcontroller.enableTask);
router.get('/listTasksByFreetimer/:fulltimerId', taskcontroller.listTasksByFulltimer);
router.get('/listTasksByTaskTypes/:taskTypeId', taskcontroller.listTasksByTaskTypes);
router.get('/gettask/:taskId', taskcontroller.getTask);



module.exports = router;