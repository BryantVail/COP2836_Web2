
// filesystem object
const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const GraphQLDate = require('./graphql_date.js');
// user defined
const about = require('./about.js');
const issue = require('./issue.js');


const resolvers = {
  Query: {
    about: () => about.getMessage,
    issueList: issue.list,
    issue: issue.get
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    issueAdd: issue.add,

  },
  GraphQLDate,
};

//
// Server
//

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  // resolvers: {queries, mutations, and definitions}
  resolvers,
  formatErrors: (error) => {
    console.log(error);
    return error;
  }
});

// install handler into 'server.applyMiddleware'
function installHandler(app) {
  server.applyMiddleware({ app, path: '/graphql' });
}


module.exports = { installHandler };
