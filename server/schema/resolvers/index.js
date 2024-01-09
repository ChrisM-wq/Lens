const users = require('./users');
const articles = require('./articles');

module.exports = {
  Mutation: {
    ...users.Mutation,
    ...articles.Mutation,
  },
  Query: {
    ...users.Query,
    ...articles.Query,
  }
};