var express = require("express");
var router = express.Router();

var mysql = require("mysql");
var connection = mysql.createConnection({
  //host: "127.0.0.1",
  //port: 3307,
  socketPath: `/cloudsql/${"oceanic-airway-268105:us-central1:root-clone"}`,
  user: "root",
  password: "Kid1214",
  database: "todo_db"
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
