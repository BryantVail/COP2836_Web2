//server.js
const express = require("express");
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind, parseValue } = require('graphql/language');

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

const issuesDb = [
  {
    id: 11,
    status: "New",
    owner: "Bryant",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 21,
    status: "Assigned",
    owner: "Stephanie",
    effort: 3,
    created: new Date("2020-06-01"),
    due: new Date("2020-07-04"),
    title: "Put gum in the Cd tray of the computer",
  },
  {
    id: 31,
    status: "Assigned",
    owner: "Stephanie",
    effort: 6,
    created: new Date("2020-06-02"),
    due: new Date("2020-07-04"),
    title: "Printer is out of ink",
  },
];

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

function issueList() {
  return issuesDb;
}

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

function issueAdd(_, { issue }) {
  validateIssue(issue);
  issue.created = new Date();
  issue.id = issuesDb.length + 1;
  // if (issue.status == undefined) {
  //   issue.status = 'New';
  // }
  issuesDb.push(issue);
  return issue;
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

//no admin rights needed for port 3000
const runningPort = 3001;
app.listen(runningPort, function () {
  console.log(`app started on port ${runningPort}`);
});

// GET
app.get('/hello', (req, res) => {
  res.send("Hello World!");
});




