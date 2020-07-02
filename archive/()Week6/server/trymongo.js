//./server/trymongo.js

const { MongoClient } = require('mongodb');

const url = "mongodb://localhost/cop2836";

function testWithCallbacks(callbackFunction) {
  console.log(`\n ----TestWithCallbacks ---`);
  const client = new MongoClient(url, { useNewUrlParser: true });
  client.connect(function (err, client) {
    if (err) {
      callbackFunction(err);
      return;
    }
    console.log("Connected to MongoDB");

    //init db
    const db = client.db();

    //specify collection
    const collection = db.collection(`employees`);

    const employee = { id: 1, name: "A. Callback", age: 30 };

    collection.insertOne(employee, function (err, result) {
      if (err) {
        client.close();
        callbackFunction(err);
        return;
      }

      //result of insert
      console.log(`Result of insert: \n${result.insertedId}`);

      //find() inserted data
      collection.find({ _id: result.insertedId })
        .toArray(function (err, docs) {
          //err
          if (err) {
            client.close();
            callbackFunction(err);
            return;
          }

          //docs
          console.log(`Result of find:\n`, docs);
          client.close();

          //this line should not run
          callbackFunction(err);
        });
    });
  });
}

async function testWithAsync() {
  console.log(`\n--- testWithAsync ---`);
  const client = new MongoClient(url, { useNewUrlParser: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db();
    const collection = db.collection('employees');

    const employee = { id: 2, name: "B. Async", age: 16 };
    const result = await collection.insertOne(employee);
    console.log('Result of insert: \n', result.insertedId);

    const docs = await collection.find({ _id: result.insertedId }).toArray();

    console.log('Result of find: \n', docs);

  } catch (err) {
    console.log(err);
  }
  finally {
    client.close();
  }
}

//run function
// testWithCallbacks(function (err) {
//   if (err) {
//     console.log(err);
//   }
// });

testWithAsync();


