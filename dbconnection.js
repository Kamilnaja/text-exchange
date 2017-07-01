var mysql = require('mysql');
var connection = mysql.createConnection ({

    host:'localhost',
    user:'root',
    password:'1',
    database:'textbase'
});

module.exports = connection;
//gdy dane są wrzucane przez mysql, działa