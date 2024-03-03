require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("DB connected"))

app.use(express.json())
app.use(express.static('public'))
app.use(cors('http://127.0.0.1:5500'))

app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({
    extended: true
  }));

const interestsRouter = require('./routes/interestsRoute.js');
app.use("/interests", interestsRouter)
app.listen(3000, () => {
    console.log("Server Started")
})