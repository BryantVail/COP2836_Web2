// server.js
require('dotenv').config();
const express = require("express");
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');

// INITIATE EXPRESS()
const app = express();
installHandler(app);

const port = process.env.API_SERVER_PORT || 3001;

//
// Server
//

// iife to instantiate the db connection
(async function start() {
  try {
    await connectToDb();
    // no admin rights needed for  3000 or 3001
    app.listen(port, function () {
      console.log(`api server started on port ${port}`);
    });
  } catch (err) {
    console.log("Error: ", err);
  }
}());


// GET
app.get('/hello', (req, res) => {
  res.send("Hello World!");
});




