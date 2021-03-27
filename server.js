const express = require('express');
const app = require("./server/routes");
const path = require('path');
const http = require("http");
const mongoose = require("mongoose");
// MongoDB connection

mongoose.connect('mongodb://127.0.0.1:27017/shoe', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to shoe database");
}).catch(err => {
    console.log("Error connecting to shoe database", err.message);
});

// Connection Port setup


// Serving the frontend pages from the dist folder

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    
    res.sendFile(path.join(__dirname + '/views/index.html'));



});


// Server setup



const hostname = '127.1.0.1';
const port = 3000;

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});