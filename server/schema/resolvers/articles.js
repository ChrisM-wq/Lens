const Article = require('../../models/Article');
const jwt = require('jsonwebtoken');

module.exports = {
  Mutation : {
    async createArticle(_, { title, caption, article, image }, context) {
            console.log(title)
            console.log(caption)
            console.log(article)

            article = decodeURIComponent(article);
            image = decodeURIComponent(image);

            // const decodedToken = jwt.verify(context.token, process.env.JWT_SECRET);
            // const user_id = decodedToken.user_id;
            const user_id = '659d392b87daf3d7a90660ba';

            const newArticle = new Article({
              user_id,
              title,
              caption,
              article,
              image
            });

            const res = await newArticle.save();

            return {
              id: res._id,
              ...res._doc
            };
        },
    },
  Query: {
    getArticles: async () => await Article.find(),
    getArticleById: async (_, { articleId }) => {
      try {
        const article = await Article.findById(articleId);
        if (!article) {
          throw new Error('Article not found');
        }
        return article;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};