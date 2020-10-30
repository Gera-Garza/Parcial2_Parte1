// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;
var user = [
  {
    name: "gera",
    password: "123"
  }
];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {
  res.send("You are on the homepage");
});

app.post("/post", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var nUser = req.body;

  console.log(user);

  // We then display the JSON to the users
  res.json(nUser);
});


app.delete('/delete', function (req, res) {
  res.send('delete:true');
});

app.put('/put/:id', function (req, res) {
	var name = req.params.id;
  res.send('Task '+ name + ' has been updated');
});