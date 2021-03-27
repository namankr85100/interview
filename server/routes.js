const express = require('express')
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const shoe = require('../server/routes/shoeroutes');
const { json } = require('body-parser');
// const equip = require('../')


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(cors());
app.use(express.static("views"));

// const router = express.Router()


// for equipment model
app.use('/api', shoe)







module.exports = app;
