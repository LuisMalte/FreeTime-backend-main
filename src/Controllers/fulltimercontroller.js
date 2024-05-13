const express = require('express');
const fulltimer = require('../Models/fulltimer');
const user = require('../Models/user');

// Crear fulltimer
async function createFulltimer(req, res){
    try{
        await fulltimer.create({
            userId: req.body.userId,
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

// Listar fulltimers
async function listFulltimer(req, res){
    try{
        await fulltimer.findAll({
            attributes: [
                'fulltimerId',
            ],
            order: ['fulltimerId'],
            include: {
                model: user,
                attributes: [   
                    'userId',
                    'userName',
                    'userEmail',
                    'userPhone',
                    'cityId',
                    'userAddress',
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

async function listFulltimerId(req, res){
    try{
        await fulltimer.findAll({
            attributes: [
                'fulltimerId',
            ],
            order: ['fulltimerId'],
        
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




// Deshabilitar fulltimer
async function disableFulltimer(req, res){
    try{
        await fulltimer.destroy({
            where: { fulltimerId : req.params.fulltimerId}
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

// Habilitar fulltimer
async function enableFulltimer(req, res){
    try{
        await fulltimer.restore({
            where: { fulltimerId : req.params.fulltimerId}
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
    createFulltimer,
    listFulltimer,
    disableFulltimer,
    enableFulltimer,
    listFulltimerId
}
