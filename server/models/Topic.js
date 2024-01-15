const mongoose = require('mongoose');

const subTopicSchema = new mongoose.Schema({
  topic: String,
  sub: [{
    topic: String
  }]
});

const topicSchema = new mongoose.Schema({
  topic: String,
  sub: [subTopicSchema]
});

module.exports = mongoose.model('Topic', topicSchema);