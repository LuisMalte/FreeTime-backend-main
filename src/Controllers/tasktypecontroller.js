require('express');
const task = require('../Models/tasktype');

async function listTypes(req, res){
    try{
        await task.findAll({
            attributes: [
                'taskId',
                'taskName'
            ],
            order: [
                     'taskId',
                    'taskName',
                    'taskDescription'
                
                ]
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    listTypes
}