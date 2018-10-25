var express = require("express");
var mysql = require("mysql");
var path = require("path");
var friendsList = require("./data/data.js");

// Create express app instance.
var app = express();
var bodyParser = require("body-parser");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"))
require("./routing/htmlRoutes")(app)
require("./routing/apiRoutes")(app)

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
