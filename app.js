var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var connection = require('./dbconnection');
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

//retrieve single text

app.get('/texts/:id', function (req, res) {
    let text_id = req.params.id;
    if (!text_id) {
        return res.status(400)
            .send({error: true, message: "enter id"})
    }
    connection.query('SELECT * FROM texts where id=?', text_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({error: false, data: results[0], message: 'Texts list'})
    })
});

//find text by name
app.get('/texts/search/:keyword', function (req, res) {
   var keyword = req.params.keyword;
   connection.query("SELECT * FROM texts WHERE title LIKE ?", ['%' + keyword + '%'], function (error, results, fields) {
       if (error) throw error;
       return res.send({error: false, data: results, message: 'Todos search list'});
   })
});

//add new text

app.post('/texts', function (req, res) {
    let text = req.body.text;
    if (!text) {
        return res.status(400).send({error:true, message: 'Please provide text'});
    }
    connection.query("INSERT INTO text SET ? ", {text: text}, function (error, results, fields) {
        if (error) throw error;
        return res.send({error: false, data: results, message: "Added new text !!!"})
    })
});

//delete

app.delete('/texts/:id', function (req, res) {

    let text_id = req.params.id;

    if (!text_id) {
        return res.status(400).send({ error: true, message: 'Please provide text_id' });
    }
    connection.query('DELETE FROM texts WHERE id = ?', text_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'text has been updated successfully.' });
    });
});

app.listen(8080, function () {
    console.log("run at 8080");
});