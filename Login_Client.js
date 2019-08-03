CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 `full_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
 `address_one` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `address_two` varchar(100) COLLATE utf8_unicode_ci,
 `city` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `state` ENUM(50) COLLATE utf8_unicode_ci NOT NULL,
 `zip_code` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.register = function(req,res){

  var today = new Date();
  var users={
    "username":req.body.username,
    "password":req.body.password,
    "full_name":req.body.full_name,
    "address_one":req.body.address_one,
    "address_two":req.body.address_two,
    "city":req.body.city,
    "state":req.body.state,
    "zip_code":req.body.zip_code
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
}

exports.login = function(req,res){
  var username= req.body.username;
  var password = req.body.password;
  connection.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
  if (error) {
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }
  else {

    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Username and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Username does not exits"
          });
    }
  }
  });
}