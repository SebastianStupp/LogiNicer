const router = require('express').Router();
const Article = require('../models/articles');

router.get('/', (request, response) => {
  Article.find()
    .then((articles) => response.json(articles))
    .catch((err) => response.json('Error:' + err));
});

router.post('/', (request, response) => {
  const articlenumber = request.body.articlenumber;
  const client = request.body.clientname;
  const bbd = request.body.bdd;
  const pzn = request.body.pzn;
  const ean = request.body.ean;
  const time = request.body.time;

  const newArticle = new Article({
    articlenumber,
    client,
    bbd,
    pzn,
    ean,
    time,
  });

  newArticle
    .save()
    .then((article) => response.json(article))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
