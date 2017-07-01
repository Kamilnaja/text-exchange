var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var connection = require('./dbconnection');
connection.connect();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//retrieve all texts
app.get('/api/texts', function (req, res) {
  connection.query('ALTER TABLE texts MODIFY COLUMN * TEXT CHARACTER SET utf8', function (error, results, fields) {
    connection.query('SELECT * FROM texts', function (error, results, fields) {


      if (error) throw error;
      return res.send({error: false, data: results, message: 'Texts list'})
    })

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
  connection.query('SELECT * FROM texts where id = ?', text_id, function (error, results, fields) {
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

app.post('/api/texts', function (req, res) {
  let text = req.body;
  var insertSql = "INSERT INTO texts SET ?";
  var query = connection.query(insertSql, text, function (error, results) {
    if (error) {
      console.error('SQL error: ', error);
      return (error);
    }
    console.log(results);
  });
});

app.put('/api/texts/:id', function (req, res) {
  let text = req.body;
  let title = req.body.title;
  let content = req.body.content;
  let id = req.body.id;

  // if (!task_id || !task) {
  //     return res.status(400).send({ error: task, message: 'Please provide task and task_id' });
  // }

  connection.query("UPDATE texts SET title = ?, content = ? WHERE id = ?", [title, content, id], function (error, result, fields) {
    if (error) {
      console.log(error);
      throw error;
      return;
    }
    return res.send({error: false, data: result, message: 'Task has been updated successfully.'});
  });
});


app.delete('/api/texts/:id', function (req, res) {
  let text_id = req.params.id;
  if (!text_id) {
    return res.status(400)
      .send({error: true, message: 'Please provide deleted text_id'});
  }
  connection.query('DELETE FROM texts WHERE id = ?', text_id, function (error, result, fields) {
    if (error) throw error;
    return res.send({error: false, data: result, message: 'Usunięto tekst o numerze ' + text_id});
  });
});

app.listen(8080, function () {
  console.log("run at 8080");
});

