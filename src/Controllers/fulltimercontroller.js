const express = require('express');
const fulltimer = require('../Models/fulltimer');
const user = require('../Models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const jwtPassword = 'qwe987gfdfull'; 

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

async function loginFulltimer(req, res) {
    try {
        // Buscar el fulltimer por fulltimerId y userId
        const fulltimerData = await fulltimer.findOne({ where: { fulltimerId: req.body.fulltimerId, userId: req.body.userId } });

        // Si no se encuentra el fulltimer, retornar un mensaje de error
        if (!fulltimerData)
            return res.status(401).json({ message: "Fulltimer not found" });

        // Obtener los datos del usuario asociado al fulltimer
        const userData = await user.findByPk(req.body.userId);

        // Si no se encuentra el usuario, retornar un mensaje de error
        if (!userData)
            return res.status(401).json({ message: "User not found" });

        // Verificar la contraseña del usuario
        const validPassword = await bcrypt.compare(req.body.userPassword, userData.userPassword);

        // Si la contraseña no es válida, retornar un mensaje de error
        if (!validPassword)
            return res.status(401).json({ message: "Invalid password" });

        // Si todo es correcto, generar un token JWT
        const token = jwt.sign(
            { userId: userData.userId, userCity: userData.cityId },
            jwtPassword,
            { expiresIn: '1h' }
        );

        // Retornar el token en la respuesta
        return res.status(200).json({ token });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = {
    createFulltimer,
    listFulltimer,
    disableFulltimer,
    enableFulltimer,
    listFulltimerId,
    loginFulltimer
}
