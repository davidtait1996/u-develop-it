const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'A^-H}oLZ8o9bf#R@9^oQ.87#',
    database: 'election'
  },
  console.log('connected to the election database')
);


module.exports = db;