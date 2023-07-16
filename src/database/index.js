const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 51198,
  user: 'postgres',
  password: 'postgres',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
