var mysql = require('mysql');
var connection=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'',
    database:'textopedia'

});

module.exports=connection;