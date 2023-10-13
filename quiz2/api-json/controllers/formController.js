const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../db/data.json');

exports.submitForm = (req, res) => {
  const formData = req.body;

  // Leer los datos actuales del archivo JSON
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    let jsonData = [];
    if (data.length > 0) {
      jsonData = JSON.parse(data);
    }

    jsonData.push(formData);

    // Guardar los datos actualizados en el archivo JSON
    fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.status(200).send('Datos almacenados con éxito');
    });
  });
};

exports.getData = (req, res) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
};
