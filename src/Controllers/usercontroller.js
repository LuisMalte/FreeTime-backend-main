require('express');
const city = require('../Models/city');
const user = require('../Models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// Crear usere

const jwtPassword = 'qwe987gfd'


async function createUser(req, res){
    try{
        const hashPassword = await bcrypt.hash(req.body.userPassword, 10)
        await user.create({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone,
            userAddress: req.body.userAddress,
            userPassword: hashPassword,
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


async function getUser(req, res){
    try{
        await user.findOne({
            where: {userId : req.params.userId},
            attributes: [
                'userId',
                'userName',
                'userEmail',
                'userPhone',
                'userAddress',
                'userPassword',
                'cityId',
            ],include:[
                {
                    model:city,
                    attributes:[
                        'departmentId'
                    ]

                }
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
            order: ['userName'],
            include:[
                {
                    model:city,
                    attributes:[
                        'cityName',
                        'departmentId'

                    
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
async function loginUser (req, res){
    try{
        const userData = await user.findOne({ where: { userId: req.body.userId}})

        if(!userData)
            return res.status(401).json({message: "User not found"})

        const validPassword = await bcrypt.compare(req.body.userPassword, userData.userPassword)

        if(!validPassword)
            return res.status(401).json({message: "Invalid password"})


        const token = jwt.sign(
            { userId: userData.userId, userCity:userData.cityId},
            jwtPassword,
            { expiresIn: '1h'}
        )

        return res.status(200).json({ token })

    }
    catch (e){
        console.log(e)
    }
}


module.exports = {
    createUser,
    listUser,
    updateUser,
    disableUser,
    enableUser,
    getUser,
    loginUser,
}
