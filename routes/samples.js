var express = require("express");
var router = express.Router();

var mysql = require("mysql");
var connection = mysql.createConnection({
  //host: "127.0.0.1",
  //port: 3307,
  socketPath: `/cloudsql/${"oceanic-airway-268105:us-central1:root"}`,
  user: "root",
  password: "Kid1214",
  database: "todo_db"
});


//テスト
//router.get("/test", function(req, res, next) {
//  return res.json("test");
//});

//新規ユーザー取得
router.post("/addUser", function(req, res, next) {
  const mailAdress = req.body.mail;
  const post = {
    id: null,
    mail: mailAdress,
    createDateTime: null,
    updateDateTime: null
  };
  connection.query("Insert into users SET ?", post, function(
    err,
    rows,
    fields
  ) {
    if (err) {
      res.json({ error: err });
    } else {
      res.json("{message:ok}");
    }
  });
});
//全ユーザーを取得
router.get("/getAllUsers", function(req, res, next) {
  connection.query("SELECT * FROM todo_db.users", function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
    console.log(rows[0]);
    if (rows[0] == null) {
      res.json("{message:error}");
    } else {
      res.json(rows);
    }
  });
});

//Todoリスト
//Todoリスト新規作成
router.post("/addList", function(req, res, next) {
  const UserId = req.body.userId;
  const Title = req.body.title;
  const Content = req.body.content;
  const Status = req.body.status;

  const post = {
    id: UserId,
    userId: UserId,
    createDateTime: null,
    updateDateTime: null,
    title: Title,
    content: Content,
    status: Status
  };
  connection.query("Insert into todoLists SET ?", post, function(
    err,
    rows,
    fields
  ) {
    if (err) {
      res.json({ error: err });
    } else {
      res.json("{message:ok}");
    }
  });
});

//全てのTodoリストを取得
router.get("/getAllLists", function(req, res, next) {
  connection.query("select * from todoLists", function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
    console.log(rows[0]);
    if (rows[0] == null) {
      res.json("{message:error}");
    } else {
      res.json(rows);
    }
  });
});


module.exports = router;
