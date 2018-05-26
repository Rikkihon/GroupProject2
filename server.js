const http = require('http');
const app = require('./app');
const db = require("./models");
const express = require("express");
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);


app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(bodyParser.json());

 
app.use(express.static("public"));

require("./routes/poster.js")(app);

db.appsequelize.sync().then(function () {
    app.listen(PORT, function() {
    console.log('Server listening on http://localhost:' + PORT);
});
});