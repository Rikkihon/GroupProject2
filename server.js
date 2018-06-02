//const http = require('http');
//const app = require('./app');
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models");

const server = http.createServer(app);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/poster.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Server listening on http://localhost:' + PORT);
    });
});