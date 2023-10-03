const fs = require('fs/promises');
const path = require('path');

const getAllRooms = async (req, res)=>{
    const rooms = await fs.readFile(path.join(__dirname, '../db/habitaciones.json'));
    const roomsJson = JSON.parse(rooms);
    res.json(roomsJson);
}

const changeState = async (req, res)=>{
    const numeroRoom = req.params.room;
    const {libre} = req.body;
    const allRooms = await fs.readFile(path.join(__dirname, '../db/habitaciones.json'));
    const objRooms = JSON.parse(allRooms);
    const resultadoRoom = objRooms.habitaciones.map((room)=>{
        if(room.numero === numeroRoom){
            return room = {
                numero: room.numero,
                tipo: room.tipo,
                libre: libre
            }
        }else{
            return room = {
                numero: room.numero,
                tipo: room.tipo,
                libre: room.libre
            }
        }
    })
    const arrayRooms = {
        habitaciones: [...resultadoRoom]
    }
    // console.log(resultadoRoom);
    await fs.writeFile(path.join(__dirname, '../db/habitaciones.json'), JSON.stringify(arrayRooms, null, 2), {encoding: 'utf-8'});
    res.json({
        message: "Cambiado"
    })
}

module.exports = {
    getAllRooms,
    changeState
}