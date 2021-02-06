'use strict';

const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname+'/projects.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/about.html'));
});




app.listen(3000, (req, res) => {
    console.log('App is listening on port 3000')
});