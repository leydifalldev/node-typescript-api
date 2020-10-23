import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";

export const apollo = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
  formatError: error => {
    return error;
  }
});
