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
async function listFulltimers(req, res){
    try{
        await fulltimer.findAll({
            attributes: [
                'fulltimerId',
                'userId',
            ],
            order: ['fulltimerId'],
            include: {
                model: user,
                where: { userId : req.params.userId },
                attributes: [   
                                'userName', 
                                'userId',
                                'FullName',
                                'email',
                                'phoneNumber',
                                'cityId',
                                'address',
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
    listFulltimers,
    disableFulltimer,
    enableFulltimer
}
