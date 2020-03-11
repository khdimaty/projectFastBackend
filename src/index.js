const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const { typeDefs } = require("./generated/prisma-client/prisma-schema");

const resolvers = {};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
