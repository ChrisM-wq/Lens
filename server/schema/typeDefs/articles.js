const typeDefs = `

type Article {
  _id: ID!
  user_id: ID!
  published: String!
  title: String!
  caption: String!
  article: String!
}

extend type Query {
  getArticles: [Article]
}

extend type Mutation {
  createArticle(
    title: String!
    caption: String!
    article: String!
  ): Article!
}`;


module.exports = typeDefs;

// readtime: Int!
// comments: [String!]
//    readtime: Int!
// comments: [String!]