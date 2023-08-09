const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    # Define other queries...
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    # Define other mutations...
  }

  type User {
    _id: ID
    username: String
    email: String
    # Define other user fields...
  }

  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
