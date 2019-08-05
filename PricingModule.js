var express = require('express');
var app = express.Router();


app.use(express.json());
var mysql = require ('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});
connection.connect(function(err){
    if( err ) throw err;
    console.log("Connected!");
});
var suggestedPrice  = 0;
var total = 0;
exports.pricingModule = function(req,rew){
    var username = req.body.username;
    connection.query('SELECT * FROM quoteTable WHERE username = ?',[username], function (error, results, fields){
        if (error){
            res.send({
                "failed": "error occurred"
            })}
        else{
                var gallons = results[0].gallons;
                //gallon requested factor = grf
                if (gallons > 1000){
                    var grf = .02;
                }
                else{
                    grf =.03;
                }
                //location factor = lf
                var state = results[0].state;
                if (state !== 'TX'){
                    var lf = .02;
                }
                else{
                    lf = .04;
                }
                // rate history factor = rhf
                if ( results.length > 0){
                    var rhf = .01;
                }
                else {
                    rhf = 0;
                }
                // rate fluctuation = rf
                var month = results[0].month;
                if (month === 'June' || month === 'July' || month === 'August'){
                    var rf = .04;
                }
                else{
                    rf = .3;
                }
                var profitFactor = .1;
                var currentPrice = 1.50;

                var margin = currentPrice + (lf - rhf + grf + profitFactor + rf);


                suggestedPrice = currentPrice + margin;
                total =  gallons * suggestedPrice;

            }

        }

        )

};
exports.quotes = function(req,res){
    var quotes = {
        "gallons": req.body.gallons,
        "address": req.body.address,
        "state": req.body.state,
        "date": req.body.date,
        "month": req.body.month,
        "price": suggestedPrice,
        "total": total,
    };
    connection.query('INSERT INTO quotes SET?', quotes, function(error, results, fields){
        if (error){
            console.log("error occurred",error);
            res.send({
                "failed": "error occurred"
            })
        }
        else{
            console.log('The solution is: ', results);
            res.send({
                "success": "Quote Form created"
            });
        }
    });
};


app.get('/FuelQuote', function(req, res) {
    res.send(pricingModule());
});

module.exports = app;
