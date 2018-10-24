var express = require("express");
var mysql = require("mysql");
var path = require("path");
// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
  })
app.post("/results", function(req, res){
  console.log(req)
})


app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
