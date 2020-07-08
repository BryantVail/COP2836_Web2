

require('dotenv').config();
const { MongoClient } = require('mongodb');
// declare db variable
let db;

const url = process.env.DB_URL || "mongodb://localhost/cop2836";

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log("\nConnected to MongoDB \n\tat", url);
  db = client.db();
}

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getNextSequence, getDb };
