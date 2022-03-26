const express = require('express');
const validator = require('validator');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
    connection = mongoose.createConnection('mongodb://localhost:27017/advising');
    connection.on("open",(ob)=>{
        console.log(`Connected to Database`);
        console.log(`open object ${ob}`);
    });
})

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });

})

