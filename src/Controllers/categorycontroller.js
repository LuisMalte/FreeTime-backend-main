require('express');
const category = require('../Models/category');

async function listCategories(req, res){
    try{
        await category.findAll({
            attributes: [
                ['categoryId','value'],
                ['categoryName','label']
            ],
            order: [ 
                    'categoryId',
                    'categoryName',
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