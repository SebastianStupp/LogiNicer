const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articlenumber: String,
  client: String,
  bbd: Boolean,
  pzn: Boolean,
  ean: Boolean,
  time: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
