const fs = require('fs/promises');
const path = require('path');

const getNumbers = async (req, res)=>{
    const numbersBtn = await fs.readFile(path.join(__dirname, '../db/db.json'));
    const numbersJson = JSON.parse(numbersBtn);
    res.json(numbersJson);
}

const changeNumber = async (req, res)=>{
    const boton = req.params.button;
    const {numero} = req.body;
    const numeroNumber = parseInt(numero);
    const allBtns = await fs.readFile(path.join(__dirname, '../db/db.json'));
    const objBtns = JSON.parse(allBtns);
    const result = numeroNumber + 1;
    const resultString = String(result);
    const btnsFinal = {
        ...objBtns,
        [boton]: resultString
    }
    // console.log(resultadoRoom);
    await fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(btnsFinal, null, 2), {encoding: 'utf-8'});
    res.json({
        message: "Cambiado"
    })
}

module.exports = {
    getNumbers,
    changeNumber
}