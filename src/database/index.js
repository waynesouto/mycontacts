const { Client } = require('pg');
require('express-async-errors');

const client = new Client({
  host: 'localhost',
  port: 54789,
  user: 'postgres',
  password: 'postgres',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
