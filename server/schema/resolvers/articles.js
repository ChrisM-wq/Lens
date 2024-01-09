const Article = require('../../models/Article');
const jwt = require('jsonwebtoken');

// module.exports = {
//   Mutation : {
//     async createArticle(_, { articleInput: { duration, tag } }, context) {

//             // const decodedToken = jwt.verify(context.token, process.env.JWT_SECRET);
//             // const user_id = decodedToken.user_id;

//             // const newArticle = new Article({
//             //     // input
//             // });

//             // const res = await newArticle.save();

//             // return {
//             //     id: res._id,
//             //     ...res._doc
//             // };
//         },
//     },
//   Query: {
//     getArticles: async () => await Article.find(),
//   },
// };