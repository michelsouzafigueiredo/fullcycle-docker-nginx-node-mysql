const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const config = {
  host: 'mysql',
  user: 'user',
  password: 'password',
  database: 'fullcycle'
};

app.get('/', async (req, res) => {
  const connection = await mysql.createConnection(config);
  
  const [rows] = await connection.execute('SELECT name FROM users');
  
  await connection.end();

  let html = '<h1>Full Cycle Rocks!</h1>';
  html += '<ul>';
  rows.forEach(row => {
    html += `<li>${row.name}</li>`;
  });
  html += '</ul>';

  res.send(html);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});