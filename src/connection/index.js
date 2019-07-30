const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'aritno9',
        password: 'Mysql123',
        host: 'db4free.net',
        database: 'aritno9',
        port : 3306
    }
)

module.exports = conn
