const express = require('express');
const {urlencoded, json} = require('express');
const cors = require('cors');
const router = require('./routes/hotel.routes.js');

const app = express();

app.use(urlencoded({extended: true}));
app.use(json());
app.use(cors());

app.use('/v1/hotel', router);

app.listen(4700, ()=>{
    console.log("Listenin at port 4700");
});