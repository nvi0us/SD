var express = require('express');
var app = express();


app.use(express.json());
var {check} = require('express-validator');


app.post('/FuelQuote', [
    check('gallon').isNumeric()], (req ,res)=>{
    var gallon = req.body.gallon
    var date = req.body.date
});

app.query('Quote', functoin(err, rows, fields){
    app.get('/FuelQuote', function(req, res) {
        var address = res.send(rows[rows.length].address);
        var price = res.send((rows[rows.length].price);
        var total = res.send((rows[rows.length].total);
    });
});
app.query('Quote History', function(err, rows, fields){
    app.get('/', function(req, res){
        res.send(rows);
    });
});


module.exports = app;
