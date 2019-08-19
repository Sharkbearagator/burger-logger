
var mysql = require("mysql");

var connection;

if(process.env.burger_db){
 connection = mysql.createConnection(process.env.burger_db)
}
else{

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourRootPassword",
  database: "burger_db"
});

}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;