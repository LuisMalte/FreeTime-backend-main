const express = require('express');
const Task = require('../Models/task');
const fulltimer = require('../Models/fulltimer');
const taskType = require('../Models/tasktype');


// Crear tarea
async function createTask(req, res){
    try{
        await Task.create({
            taskName: req.body.taskName,
            taskDescription: req.body.taskDescription,
            date: req.body.date,
            offer: req.body.offer,
            address: req.body.address,
            taskTypeId: req.body.taskTypeId,
            fulltimerId: req.body.fulltimerId
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

// Listar tareas
async function listTasks(req, res){
    try{
        await Task.findAll({
            attributes: [
                'taskId',
                'taskName',
                'taskDescription',
                'date',
                'offer',
                'address',
                'taskTypeId',
                'fulltimerId'
            ],
            order: ['taskName'],
            include:[
                 {
                    model: fulltimer,
                    attributes: [   

                                'fulltimerId',
                                'userId'
                                 ]     
                }, 
                 {
                model: taskType,
                attributes: [   
                                'taskTypeId',
                                'taskTypeName',
                                'taskTypeDescription' 
                            ]  
                 }
            ] }).then(function (data){
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
async function listTasksByFulltimer(req, res){
    try{
        await Task.findAll({
            attributes: [
                'taskId',
                'taskName',
                'taskDescription',
                'date',
                'offer',
                'address',
                'taskTypeId',
                'fulltimerId'
            ],
            order: ['taskName'],
            include:[
                 {
                    model: fulltimer,
                    where: { fulltimerId: req.params.fulltimerId },
                    attributes: [   

                                'fulltimerId',
                                'userId'
                                 ]     
                }
            ] }).then(function (data){
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


async function listTasksByTaskTypes(req, res){
    try{
        await Task.findAll({
            attributes: [
                'taskId',
                'taskName',
                'taskDescription',
                'date',
                'offer',
                'address',
                'taskTypeId',
                'fulltimerId'
            ],
            order: ['taskName'],
            include:[
                 {
                    model: taskType,
                    where: { taskTypeId: req.params.taskTypeId },
                    attributes: [   

                        'taskTypeId',
                        'taskTypeName',
                        'taskTypeDescription' 

                                
                                 ]     
                }
            ] }).then(function (data){
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
// Actualizar tarea
async function updateTask(req, res){
    try{
        await Task.update({
            taskName: req.body.taskName,
            taskDescription: req.body.taskDescription,
            date: req.body.date,
            offer: req.body.offer,
            address: req.body.address,
            taskTypeId: req.body.taskTypeId
        },{ 
            where: { taskId :  req.params.taskId }
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

// Eliminar tarea
async function disableTask(req, res){
    try{
        await Task.destroy({
            where: { taskId : req.params.taskId }
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


async function enableTask(req, res){
    try{
        await Task.restore({
            where: { taskId : req.params.taskId}
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
    catch (e){
        console.log(e);
    }
}

async function getTask(req, res){
    try{
        await Task.findOne({
            where: {taskId  : req.params.taskId},
            attributes: [
                'taskName',
                'taskDescription',
                'date',
                'offer',
                'address',
                'address',
                'taskTypeId'

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
    createTask,
    listTasks,
    updateTask,
    disableTask,
    enableTask,
    listTasksByFulltimer,
    listTasksByTaskTypes,
    getTask
}
