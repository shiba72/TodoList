# TodoList(node.js example)

# Set Up (local)

 `git clone https://github.com/shiba72/TodoList.git`
 
 `cd TodoList`
 
 `npm install`
 
 `npm start`

##Local Set Up
  
 Rewrite two files (Routes / samples.js) (Routes / samples.js)
 
 -before
 
`var mysql = require("mysql");
var connection = mysql.createConnection({
  //host: "127.0.0.1",
  //port: 3307,
  socketPath: `/cloudsql/${"oceanic-airway-268105:us-central1:root"}`,
  user: "root",
  password: "Kid1214",
  database: "todo_db"
});`

-After

`var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  //socketPath: `/cloudsql/${"oceanic-airway-268105:us-central1:root"}`,
  user: "root",
  password: "Kid1214",
  database: "todo_db"
});`

#API (Route)
Create new user
`http://localhost:3000/samples/addUser'

Get all users
`http://localhost:3000/samples/getAllUsers'

Create Todo list
`http://localhost:3000/samples/add/addList'

Get all Todo lists
`http://localhost:3000/samples/getAllLists'


Thank you in advance.
If you have any questions, ask a question
