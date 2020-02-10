var express= require("express");
var routes = express();

var userApp = require("./user");

routes.use("/user", userApp);

module.exports = routes;