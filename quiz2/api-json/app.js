const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

const formRoutes = require('./routes/router');
app.use('/api', formRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});