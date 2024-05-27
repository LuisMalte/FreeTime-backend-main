const express = require('express');
const freetimer = require('../Models/freetimer');
const user = require('../Models/user');
const category = require('../Models/category');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const jwtPassword = 'qwe987gfdft'

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

async function listFreetimers(req, res) {
    try {
        const data = await freetimer.findAll({
            attributes: [
                'freetimerId',
                'healthInsurance',
            ],
            order: ['freetimerId'],
            include: [
                {
                    model: user,
                    attributes: [   
                        'userId',
                        'userName',
                        'userEmail',
                        'userPhone',
                        'cityId',
                        'userAddress',
                    ]
                },
                {
                    model: category,
                    attributes: [   
                        'categoryId',
                        'categoryName',
                        'categoryDescription'
                    ]
                },
                
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
    } catch(e){
        console.log(e);
    }
}
// Listar freetimers
async function listFreetimerByCategories(req, res){
    try{
        await freetimer.findAll({
            attributes: [
                'freetimerId',
                'healthInsurance',
            ],
            order: ['freetimerId'],
            include: [
                {
                    model: category,
                    where: { categoryId: req.params.categoryId },
                    attributes: [   
                        'categoryId',
                        'categoryName',
                        'categoryDescription'
                    ]
                }
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

async function getFreetimer(req, res){
    try{
        await freetimer.findOne({
            where: {freetimerId  : req.params.freetimerId},
            attributes: [
                'categoryId',
            ]

            //Falta traer el departmentId
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
async function loginFreetimer(req, res) {
    try {
        const freetimerData = await freetimer.findOne({ where: { freetimerId: req.body.freetimerId, userId: req.body.userId } });

        if (!freetimerData)
            return res.status(401).json({ message: "Freetimer not found" });

        const userData = await user.findByPk(req.body.userId);

        if (!userData)
            return res.status(401).json({ message: "User not found" });

        const validPassword = await bcrypt.compare(req.body.userPassword, userData.userPassword);

        if (!validPassword)
            return res.status(401).json({ message: "Invalid password" });

        const token = jwt.sign(
            { userId: userData.userId, userCity: userData.cityId },
            jwtPassword,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    loginFreetimer
};

module.exports = {
    createFreetimer,
    listFreetimerByCategories,
    updateFreetimer,
    disableFreetimer,
    listFreetimers,
    enableFreetimer,
    getFreetimer,
    loginFreetimer
}
