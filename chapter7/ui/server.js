//server.js

require('dotenv').config();

const express = require('express');

const app = express();
const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || 'http://localhost:3001/graphql';
const env = { UI_API_ENDPOINT };

app.get('/env.js', function (req, res) {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});


const port = process.env.UI_SERVER_PORT || 8000;

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`UI started on port: ${port}`);
});





