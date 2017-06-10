var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection ({

    host:'localhost',
    user:'root',
    password:'',
    database:'textbase'
});

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//retrieve all texts
app.get('/texts', function (req, res) {
   connection.query('SELECT * FROM texts', function (error, results, fields) {
       if (error) throw error;
       return res.send({error: false, data: results, message: 'Texts list'})
   })
});


app.listen(8080, function () {
    console.log("run at 8080");
});