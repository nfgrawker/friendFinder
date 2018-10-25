module.exports = function(app){
app.get("/api/friends", function(req, res) {
  return res.json(friendsList);
});

app.post("/results", function(req, res){
    let pusher = req.body
    let total = 10000;
    for(let i in friendsList){
        var diff = 0;
        for(let j in friendsList[i]["scores"]){
        diff += Math.abs((parseInt(friendsList[i].scores[j])-parseInt(req.body.scores[j])))

        }
        if(diff < total){
            total = diff
            var bestMatch = {name:friendsList[i].name,picture:friendsList[i].photo}
        }

    }
    friendsList.push(pusher)
    console.log(pusher)
    res.send(bestMatch)
});
}
