const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",
    database: "userdata",
    user: "root",
    password: "krishagrawal"
});

module.exports = pool.promise();