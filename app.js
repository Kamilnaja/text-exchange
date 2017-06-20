var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var connection = require('./dbconnection');
connection.connect();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.static('src'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//retrieve all texts
app.get('/api/texts', function (req, res) {
  connection.query('SELECT * FROM texts', function (error, results, fields) {
    if (error) throw error;
    return res.send({error: false, data: results, message: 'Texts list'})
  })
});

//retrieve single text
//api works properly
app.get('/api/texts/:id', function (req, res) {
  let text_id = req.params.id;
  if (!text_id) {
    return res.status(400)
      .send({error: true, message: "enter id"})
  }
  connection.query('SELECT * FROM texts where id=?', text_id, function (error, results, fields) {
    if (error) throw error;
    return res.send({error: false, data: results[0], message: 'Item is empty'})
  })
});

//find text by name
app.get('/api/texts/search/:keyword', function (req, res) {
  var keyword = req.params.keyword;
  connection.query("SELECT * FROM texts WHERE title LIKE ?", ['%' + keyword + '%'], function (error, results, fields) {
    if (error) throw error;
    return res.send({error: false, data: results, message: 'Todos search list'});
  })
});

//add new text
//todo -  test this api
app.post('/api/texts', function (req, res) {
  let text = req.body;
  var insertSql = "INSERT INTO texts SET ?";
  var query = connection.query(insertSql, text, function (err, result) {
    if (err) {
      console.error('SQL error: ', err);
      return (err);
    }
    console.log(result);
  });
});

app.put('/api/texts', function (req, res) {
  //todo - wyciągnąć id
  let text = req.body;

  var insertSql = "UPDATE texts SET text WHERE id = 77";

  if (!task_id || !task) {
      return res.status(400).send({ error: task, message: 'Please provide task and task_id' });
  }

  connection.query(insertSql, [task_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({error: false, data: results, message: 'Task has been updated successfully.'});
  });
});

// - See more at: https://arjunphp.com/creating-restful-api-express-js-node-js-mysql/#sthash.mDwDbO0j.dpuf
app.delete('/api/texts/:id', function (req, res) {
  let text_id = req.params.id;
  if (!text_id) {
    return res.status(400)
      .send({error: true, message: 'Please provide deleted text_id'});
  }
  connection.query('DELETE FROM texts WHERE id = ?', text_id, function (error, results, fields) {
    if (error) throw error;
    return res.send({error: false, data: results, message: 'Usunięto tekst o numerze ' + text_id});
  });
});

app.listen(8080, function () {
  console.log("run at 8080");
});