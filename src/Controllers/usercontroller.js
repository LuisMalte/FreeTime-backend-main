require('express');
const user = require('../Models/user');

// Crear usere
async function createUser(req, res){
    try{
        await user.create({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            userAddress: req.body.userAddress,
            userPassword: req.body.userPassword,
            cityId: req.body.cityId,

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
async function listUser(req, res){
    try{
        await user.findAll({
            attributes: [
                'userId',
                'userName',
                'userEmail',
                'userPhone',
                'cityId',
                'userAddress',
                'userPassword'
            ],
            order: ['userName']
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
async function updateUser(req, res){
    try{
        await user.update({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            cityId: req.body.cityId,
            userAddress: req.body.userAddress,
          
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
async function disableUser(req, res){
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
async function enableUser(req, res){
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
    createUser,
    listUser,
    updateUser,
    disableUser,
    enableUser
}
