//server.js
const express = require("express");
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind, parseValue } = require('graphql/language');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost/cop2836';
let db;

const issues = [

];

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value) {
    return value.toISOString();
  },

  parseValue(value) {
    const dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
  },
  parseLiteral(ast) {
    // before
    // return (ast.kind == Kind.STRING) ? new Date(ast.value) : undefined;

    if (ast.kind == Kind.STRING) {
      const value = new Date(ast.value);
      return isNaN(value) ? undefined : value;
    }
  }
});//end GraphQLDate

function validateIssue(issue) {
  const errors = [];
  if (issue.title.length < 3) {
    errors.push(`Field "title" must be at least 3 characters long`);
  }
  if (issue.status == 'Assigned' && !issue.owner) {
    errors.push(`Field "owner" is required when status is "Assigned"`);
  }
  if (errors.length > 0) {
    throw new UserInputError(`Invalid input(s)`, { errors });
  }
}



//fileSystem object
const fs = require('fs');

let aboutMessage = "Issue Tracker API v1.0";

const resolvers = {
  Query: {
    about: () => aboutMessage,
    issueList,
  },
  Mutation: {
    setAboutMessage,
    issueAdd,
  },
  GraphQLDate,
};

async function issueList() {
  const issues = await db.collection('issues').find({}).toArray();

  return issues;
}

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

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

async function issueAdd(_, { issue }) {
  validateIssue(issue);
  issue.created = new Date();
  issue.id = await getNextSequence('issues');

  const result = await db.collection('issues').insertOne(issue);
  const savedIssue = await db.collection('issues').findOne({ _id: result.insertedId });
  return savedIssue;
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./server/schema.graphql", "utf-8"),
  resolvers,
  formatErrors: error => {
    console.log(error);
    return error;
  }
});

//INITIATE EXPRESS()
const app = express();

app.use(express.static('public'));

//APPLY GRAPHQL AS Middleware
server.applyMiddleware({ app, path: '/graphql' });


// iife to instantiate the db connection
(async function () {
  try {
    await connectToDb();
    //no admin rights needed for port 3000
    const runningPort = 3001;
    app.listen(runningPort, function () {
      console.log(`app started on port ${runningPort}`);
    });

  } catch (err) {
    console.log("Error: ", err);
  }
})();


// GET
app.get('/hello', (req, res) => {
  res.send("Hello World!");
});




