var express = require("express");
var	bodyParser = require("body-parser");// body-parser middleware which parses the body and sets req.body property.
var app = express();
var port = 3070;
var routes = require("./routes/routes"); // sub app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", routes); // mount the sub app

app.get("/", function(req,res){
	res.send("App works");
})

//default route
// Make sure you add this route as the last route. if you add this at the beginning all the routes will be redirected to this.
app.get("*", function(req, res) {
   res.send("App works!!!!!");
})

app.listen(port);