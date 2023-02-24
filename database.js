const mysql = require('mysql');
require('dotenv').config();

parameters = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
    multipleStatements: true,
    };

mysqlConnection = mysql.createConnection(parameters);

mysqlConnection.connect((err, results) => {
    if (err) {
    console.log(err);
    } else {
    console.log(results);
    }
    });


    module.exports = {mysqlConnection};
