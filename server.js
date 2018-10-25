var express = require("express");
var mysql = require("mysql");
var path = require("path");
var friendsList = require("./app/data/data.js");
// Create express app instance.
var app = express();
var bodyParser = require("body-parser");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
  });
app.post("/results", function(req, res){
    let total = 10000;
    for(let i in friendsList){
        console.log(friendsList[i].scores[0])
        var diff = 0;
        for(let j in friendsList[i]["scores"]){
        diff += Math.abs((parseInt(friendsList[i].scores[j])-parseInt(req.body.scores[j])))

        }
        if(diff < total){
            total = diff

        }
        console.log(diff)
        console.log(total)
        var bestMatch = friendsList[i].name
    }

    res.send(bestMatch)
});


app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
