require('dotenv').config();

console.log(process.env.DB_HOST)

const knex = require('knex')({
  debug: false,
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'vamp',
    connectionTimeoutMillis: 0,
    ssl: false
  },
});

module.exports = knex;