const typeDefs = `
scalar DateTime

type Article {
  _id: ID!
  user_id: ID!
  published: DateTime!
  title: String!
  caption: String!
  article: String!
  image: String!
}

type ArticleShowcase {
  _id: ID!
  user_id: ID!
  published: DateTime!
  title: String!
  caption: String!
  image: String!
}

extend type Query {
  getArticles: [ArticleShowcase]
  getArticleById(articleId: ID!): Article
}

extend type Mutation {
  createArticle(
    title: String!
    caption: String!
    article: String!
    image: String!
  ): Article!
}`;


module.exports = typeDefs;

// readtime: Int!
// comments: [String!]
//    readtime: Int!
// comments: [String!]