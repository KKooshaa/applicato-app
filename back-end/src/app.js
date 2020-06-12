const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const multer = require('multer');
const upload = multer();

const app = express();

// Connect To DataBase
require("./dbConfig")

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));
// Cors
app.use(cors());

// Routes
require("./routes")(app)

// Start Listening To The Server
app.listen(process.env.PORT || 8084);

module.exports = app
