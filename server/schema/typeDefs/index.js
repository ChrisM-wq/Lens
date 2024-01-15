const users = require('./users');
const articles = require('./articles');
const topics = require('./topics');

const typeDefs = [
  users,
  articles,
  topics,
];

module.exports = typeDefs;