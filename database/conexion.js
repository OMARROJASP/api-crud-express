const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host:'127.0.0.1',
        user:'root',
        password:'Rojas#$70',
        database:'api_express',
    }
)

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Base de datos conectada');
});

module.exports = db;