require('express');
const task = require('../Models/tasktype');

async function listTypes(req, res) {
    try {
        const data = await task.findAll({
            attributes: [
                'taskTypeId',
                'taskTypeName',
                'taskTypeDescription' // Agregar la columna taskTypeDescription
            ],
            order: [
                'taskTypeId',
                'taskTypeName',
                'taskTypeDescription' // Asegúrate de incluir la columna aquí también
            ]
        });

        return res.status(200).json({
            data: data
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            error: error.message
        });
    }
}

module.exports = {
    listTypes
}