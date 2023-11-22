const express = require('express');
const {json, urlencoded} = require('express');
const cors = require('cors');
const router = require('./routes/routes.js');

const app = express();


app.use(urlencoded({extended: true}));
app.use(json());
app.use(cors());


app.use('/v1/restaurante', router);

app.listen(4700, ()=>{
    console.log('Listening at port 4700');
})