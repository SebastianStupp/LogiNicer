const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articleNumber: { type: String, required: true },
  clientId: { type: String, required: true },
  bbd: Boolean,
  pzn: Boolean,
  ean: Boolean,
  time: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
