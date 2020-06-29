var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql.attendance.gschristian.org",
  user: "achiu",
  password: "gscc4404",
  database: "attendancesql"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    var sql="select * from members_table";
    con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    });
});

module.exports = con;