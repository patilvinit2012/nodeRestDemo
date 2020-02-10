var express = require("express");
var app = express();

const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];

app.get("/users", function(req, res) {
	res.json(users);
})

app.get("/users/:userName", function(req, res) {
	let user = users.filter(function(user){
		if(req.params.userName == user.userName){
			return user;
		}
	})
	res.json(user);
})

app.post("/users", function(req, res){
	console.log(req.params);
	users.push(req.body);
	res.json(users);
})


module.exports = app;