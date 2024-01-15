// typedefs.graphql
const typeDefs = `
type Tag {
  _id: ID!
  name: String!
}

type Topic {
  _id: ID!
  topic: String!
  sub: [Topic]
}

type Query {
  searchTagsByTopic(topicName: String!): [Tag]
}`;

module.exports = typeDefs;