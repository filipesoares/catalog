const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./db");
const fs = require('fs');
const path = require('path');
const cors = require('cors')
require("dotenv").config();

const app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname + '/../../logs/', 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.json());

db.query("CREATE DATABASE IF NOT EXISTS `catalog`", function (err, result) {
  if (err) throw err;  
});

db.query("CREATE TABLE IF NOT EXISTS discs (" +
 "id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY," +
 "name varchar(200) NOT NULL," +
 "artist varchar(100) DEFAULT NULL," +
 "year smallint(4) NOT NULL," +
 "tracks smallint(11) NOT NULL," +
 "gender varchar(80) DEFAULT NULL" +
") ENGINE=InnoDB DEFAULT CHARSET=latin1;", function (err, result) {
  if (err) throw err;  
});

app.use(cors());

const routes = require("../app/routes");
routes(app);

module.exports = app;
