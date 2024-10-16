const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  published: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String
  },
  caption: {
    type: String
  },
  article: {
    type: String
  },
  image: {
    type: String
  },
  readtime: {
    type: Number
  },
  tags: [{
    type: String
  }],
  comments: [{
    type: String
  }]
});

module.exports = mongoose.model('Article', articleSchema);