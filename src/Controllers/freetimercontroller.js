const express = require('express');
const freetimer = require('../Models/freetimer');
const user = require('../Models/user');
const category = require('../Models/category');

// Crear freetimer
async function createFreetimer(req, res){
    try{
        await freetimer.create({
            userId: req.body.userId,
            healthInsurance: req.body.healthInsurance,
            categoryId: req.body.categoryId
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

// Listar freetimers
async function listFreetimers(req, res){
    try{
        await freetimer.findAll({
            attributes: [
                'freetimerId',
                'healthInsurance',
            ],
            order: ['freetimerId'],
            include: {
                model: user,
                where: { userId : req.params.userId },
                attributes: [   
                                'userId',
                                'userName',
                                'userEmail',
                                'userPhone',
                                'cityId',
                                'userAddress',
                            ]   
            },
            include: {
                model: category,
                where: { categoryId : req.params.categoryId },
                attributes: [   
                    'categoryId',
                    'categoryName',
                    'categoryDescription'
                            ]   
            }
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

// Actualizar freetimer
async function updateFreetimer(req, res){
    try{
        await freetimer.update({
            categoryId: req.body.categoryId
        },{ 
            where: { freetimerId :  req.params.freetimerId }
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

// Deshabilitar freetimer
async function disableFreetimer(req, res){
    try{
        await freetimer.destroy({
            where: { freetimerId : req.params.freetimerId}
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

// Habilitar freetimer
async function enableFreetimer(req, res){
    try{
        await freetimer.restore({
            where: { freetimerId : req.params.freetimerId}
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

module.exports = {
    createFreetimer,
    listFreetimers,
    updateFreetimer,
    disableFreetimer,
    enableFreetimer
}
