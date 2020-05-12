const router = require('express').Router();
let ArticleStock = require('../models/articleStock');

router.route('/').get((request, response) => {
  ArticleStock.find()
    .then((logins) => response.json(logins))
    .catch((err) => response.status(500).json('Error:' + err));
});

router.route('/').post((request, response) => {
  const { clientId, articleId, stock, storageId, bbd, pzn, ean } = request.body;

  const newArticleStock = new ArticleStock({
    clientId,
    articleId,
    stock,
    storageId,
    bbd,
    pzn,
    ean,
  });

  newArticleStock
    .save()
    .then((newArticleStock) => response.json(newArticleStock))
    .catch((err) => response.status(500).json('Error:' + err));
});

module.exports = router;
