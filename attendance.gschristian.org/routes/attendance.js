var express = require('express');
var router = express.Router();
var con=require('../connect');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/attendance', function(req, res, next) {
    var sql='SELECT * FROM members_table';
    con.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('attendance', { title: 'Attendance', userData: data});
  });
});


// router.post('/create', function(req, res, next) {
    
//       var firstname     = req.body.firstname;
//       var lastname     = req.body.lastname;
      
//      var sql = `INSERT INTO members_table (firstname, lastname) VALUES ('${firstname}', '${lastname}' )`;
//      con.query(sql,function (err, data) {
//         if (err) throw err;
//              console.log("record inserted");
//          });
//      res.redirect('/attendance');
// });


router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
  var firstname     = req.body.firstname;
  var lastname     = req.body.lastname;
  var email         = req.body.email;
  var date          = new Date();
  // insert user data into users table
   var sql = `INSERT INTO members_table (firstname, lastname, email, date) VALUES ('${firstname}', '${lastname}', '${email}' , '${date}')`;
  con.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
 res.redirect('/successful');  // redirect to user form page after inserting the data
}); 

module.exports = router;