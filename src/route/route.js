const Router = require("express").Router();
const control = require("../controller/control");


Router.get("/count", control.count );


module.exports = Router;