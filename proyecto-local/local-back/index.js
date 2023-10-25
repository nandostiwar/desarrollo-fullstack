const express = require('express');
const {json, urlencoded} = require('express');
const cors = require('cors');
const router = require('./routes/local.routes.js');

const app = express();

// uso de Middlewares
app.use(urlencoded({extended: true}));
app.use(json());
app.use(cors());

// Uso de enrutador
app.use('/v1/local', router);

app.listen(4200, ()=>{
    console.log('Listening at port 4200');
})