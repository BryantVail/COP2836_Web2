//server.js
const express = require("express");
const app = express();

app.use(express.static('public'));

//no admin rights needed for port 3000
const runningPort = 3001;
app.listen(runningPort, function () {
  console.log(`app started on port ${runningPort}`);
});

// GET
app.get('/hello', (req, res) => {
  res.send("Hello World!");
});




