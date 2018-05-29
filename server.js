const http = require('http');
const app = require('./app');
const db = require("./models");
const express = require("express");
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
require("./routes/poster.js")(app);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

db.sequelize.sync().then(function () {
    app.listen(PORT, function() {
    console.log('Server listening on http://localhost:' + PORT);
});
});
 

 