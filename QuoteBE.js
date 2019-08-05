var express = require('express');
var app = express();


app.use(express.json());
var {check} = require('express-validator');


app.post('/FuelQuote', [
    check('gallon').isNumeric()], (req ,res)=>{
    var gallon = req.body.gallon
});

app.get('/FuelQuote', function(req, res,) {
    var address = res.send('Address from Database from Profile Page');
    var date = res.send('date');
    var price = res.send('price from pricing module');
    var total = res.send('total price from formula');
});
app.query('Quote History', function(err, rows, fields){
    app.get('/', function(req, res){
        res.send(rows);
    });
});

app.get('/FuelQuote', function(req, res, next) {
    var price = res.send('calculated price');
});

module.exports = app;
