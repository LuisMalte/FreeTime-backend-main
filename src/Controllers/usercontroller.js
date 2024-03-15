require('express');
const user = require('../Models/user');

// Crear usere
async function createuser(req, res){
    try{
        await user.create({
            FullName: req.body.FullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            cityId: req.body.cityId,
            address: req.body.address,
            fulltimer: req.body.fulltimer,
            freetimer: req.body.freetimer,
            password: req.body.password
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

// Listar useres
async function listusers(req, res){
    try{
        await user.findAll({
            attributes: [
                'userId',
                'FullName',
                'email',
                'phoneNumber',
                'cityId',
                'address',
                'fulltimer',
                'freetimer'
            ],
            order: ['FullName']
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

// Actualizar usere
async function updateuser(req, res){
    try{
        await user.update({
            FullName: req.body.FullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            cityId: req.body.cityId,
            address: req.body.address,
            fulltimer: req.body.fulltimer,
            freetimer: req.body.freetimer
        },{ 
            where: { userId :  req.params.userId }
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

// Deshabilitar usere
async function disableuser(req, res){
    try{
        await user.destroy({
            where: { userId : req.params.userId}
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

// Habilitar usere
async function enableuser(req, res){
    try{
        await user.restore({
            where: { userId : req.params.userId}
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
    createuser,
    listusers,
    updateuser,
    disableuser,
    enableuser
}
