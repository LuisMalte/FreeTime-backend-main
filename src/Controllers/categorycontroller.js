require('express');
const department = require('../Models/category');

async function listCategories(req, res){
    try{
        await department.findAll({
            attributes: [
                'categoryId',
                'categoryName'
            ],
            order: ['categoryName',
                    'categoryDescription'
                
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
    listCategories
}