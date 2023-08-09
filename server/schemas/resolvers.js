const resolvers = {
    Query: {
      me: (_, __, context) => {
        return context.user; // Access authenticated user from context
      },
      // Define other query resolvers...
    },
    Mutation: {
      login: (_, { email, password }) => {
        // Authenticate user and generate token
        const user = authenticateUser(email, password);
        const token = generateToken(user);
        return { token, user };
      },
      // Define other mutation resolvers...
    },
  };
  
  module.exports = resolvers;
  