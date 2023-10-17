const fs = require('fs/promises');
const path = require('path');

const obtenerDatos = async (req, res) => {
    try {
        // Leer el archivo JSON existente
        const filePath = path.join(__dirname, '../../db/bd.json');
        const signosFile = await fs.readFile(filePath, 'utf-8');
        const objSignos = JSON.parse(signosFile);

        res.json(objSignos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        res.status(500).json({
            error: "Error interno del servidor al obtener los datos."
        });
    }
}

const procesarFormulario = async (req, res) => {
    try {
        // Obtener los datos del formulario desde req.body
        const { nombre, edad, telefono, correo, estrato } = req.body;

        // Crear un nuevo objeto JSON con los datos del formulario
        const nuevoSigno = {
            nombre,
            edad,
            telefono,
            correo,
            estrato
        };

        // Leer el archivo JSON existente o crear uno vacío si no existe
        const filePath = path.join(__dirname, '../../db/bd.json');
        
        let objSignos = [];

        try {
            const signosFile = await fs.readFile(filePath, 'utf-8');
            objSignos = JSON.parse(signosFile);
        } catch (error) {
            // Si el archivo no existe, objSignos se queda vacío
        }

        // Agregar el nuevo signo al arreglo de signos
        objSignos.push(nuevoSigno);

        // Escribir el objeto actualizado en el archivo JSON
        await fs.writeFile(filePath, JSON.stringify(objSignos, null, 2), 'utf-8');

        res.json({
            message: "Datos del formulario procesados y guardados."
        });
    } catch (error) {
        console.error("Error al procesar el formulario:", error);
        res.status(500).json({
            error: "Error interno del servidor al procesar el formulario."
        });
    }
}

module.exports = {
    procesarFormulario,
    obtenerDatos
}
