var mysql = require ('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
exports.quotes = function(req,res){
    var username = req.body.username;
    connection.query('SELECT * FROM quoteTable WHERE username = ?',[username], function (error, rows){
        if (error){
            res.send({
                "failed": "error occurred"
            })}
        else{
            res.render('quoteTable', {FuelQuote:"Quote History", data:rows}
            );
        }
    });
};
