const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleStockSchema = new Schema({
  clientId: String,
  articleId: String,
  stock: Number,
  storageId: String,
  bbd: Date,
  pzn: String,
  ean: String,
});

const ArticleStock = mongoose.model('ArticleStock', articleStockSchema);

module.exports = ArticleStock;
