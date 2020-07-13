
// filesystem object
const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const issue = require('./issue.js');
const about = require('./about.js');
const GraphQLDate = require('./graphql_date.js');


const resolvers = {
  Query: {
    about: () => about.getMessage,
    issueList: issue.list,
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
