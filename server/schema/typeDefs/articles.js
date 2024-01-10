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

type ArticleTrending {
  _id: ID!
  user_id: UserTrending
  published: DateTime!
  title: String!
}

type UserTrending {
  _id: ID
  avatar: String
  username: String
}

extend type Query {
  getArticles: [ArticleShowcase]
  getTrendingArticles: [ArticleTrending]
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