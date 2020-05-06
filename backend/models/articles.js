const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articlenumber: { type: String, required: true },
  client: { type: String, required: true },
  bbd: Boolean,
  pzn: Boolean,
  ean: Boolean,
  time: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
