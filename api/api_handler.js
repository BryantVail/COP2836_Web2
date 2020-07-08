
// filesystem object
const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const GraphQLDate = require('./graphql_date.js');
const about = require('./about.js');
const issue = require('./issue');


const resolvers = {
  Query: {
    about: () => about.aboutMessage,
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
