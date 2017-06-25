var mysql = require('mysql');
var connection = mysql.createConnection ({

    host:'localhost',
    user:'root',
    password:'1',
    database:'textbase',
    charset: 'utf8'
});

module.exports = connection;