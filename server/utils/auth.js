const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express'); // Import AuthenticationError from Apollo Server

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = function ({ req }) {
  let token = req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    throw new AuthenticationError('You have no token!'); // Use Apollo's AuthenticationError
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    return { user: data }; // Return user data in the context
  } catch {
    throw new AuthenticationError('Invalid token!'); // Use Apollo's AuthenticationError
  }
};
