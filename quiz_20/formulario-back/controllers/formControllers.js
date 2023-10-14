const fs = require('fs/promises');
const path = require('path');

async function saveData(req, res){
    const {body} = req;
    const clientes = await fs.readFile(path.join(__dirname, '../db/db.json'));
    const objClientes = JSON.parse(clientes);
    const date = new Date();
    const objBody = {
        hora: date,
        ...body
    }
    objClientes.clientes.push(objBody);
    const objSave = {
        clientes: objClientes.clientes
    }
    await fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(objSave, null, 2), {encoding: 'utf-8'})
    res.json({
        message: "data saved!"
    });
}

async function getData(req, res){
    const clientes = await fs.readFile(path.join(__dirname, '../db/db.json'));
    const objClientes = JSON.parse(clientes);
    res.json(objClientes);
}

module.exports = {
    saveData,
    getData
}