const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const { typeDefs } = require("./generated/prisma-client/prisma-schema");
const Query = require("./resolvers/query");
const Mutation = require("./resolvers/mutation");
const UserProduct = require("./resolvers/userProduct");
const UserBag = require("./resolvers/userbag");
const User = require("./resolvers/user");
const resolvers = { Query, Mutation, UserProduct, UserBag, User };

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
