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

/* サンプルAPI①
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get("/", function(req, res, next) {
  var param = { 値: "これはサンプルAPIです" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

/* サンプルAPI②
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get("/hello", function(req, res, next) {
  var param = { result: "Hello World !" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

/* サンプルAPI③
 * http://localhost:3000/samples/hello/(任意の文字列) にGETメソッドのリクエストを投げると、
 * JSON形式で(任意の文字列)を返す。
 */
router.get("/hello/:place", function(req, res, next) {
  // var param = {"result":"Hello "+ req.params.place + " !"};                          // ← ★★ 削除 ★★
  var param = {
    result: "Hello " + req.params.place + " !",
    "shop name": req.query.shop
  }; // ← ★★ 追加 ★★
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});
/* サンプルAPI④
 * http://localhost:3000/samples にPOSTメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post("/", function(req, res, next) {
  var param = {
    値: "POSTメソッドのリクエストを受け付けました",
    bodyの値: req.body.card
  };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

router.get("/test", function(req, res, next) {
  return res.json("test");
});

router.get("/getall", function(req, res, next) {
  connection.connect();
  connection.query("select * from todoLists ORDER BY RAND() limit 20", function(
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
