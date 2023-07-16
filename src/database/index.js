const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 52134,
  user: 'postgres',
  password: 'postgres',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
