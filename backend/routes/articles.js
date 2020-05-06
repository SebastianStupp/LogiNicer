const router = require('express').Router();
const Article = require('../models/articles');

router.get('/', (request, response) => {
  Article.find()
    .then((articles) => response.json(articles))
    .catch((err) => response.status(500).json('Error:' + err));
});

router.post('/', (request, response) => {
  const { articleNumber, client, bbd, pzn, ean, time } = request.body;

  const newArticle = new Article({
    articleNumber,
    client,
    bbd,
    pzn,
    ean,
    time,
  });

  newArticle
    .save()
    .then((newArticle) => response.json(newArticle))
    .catch((err) => response.status(500).json('Error:' + err));
});

router.patch('/:id', (request, response) => {
  Article.findByIdAndUpdate(
    { _id: request.params.id },
    {
      $set: {
        articleNumber: request.body.articleNumber,
        client: request.body.client,
        bbd: request.body.bbd,
        pzn: request.body.pzn,
        ean: request.body.ean,
      },
    },
    { new: true }
  )
    .then((clientname) => response.json(clientname))
    .catch((err) => response.status(500).json('Error:' + err));
});

router.delete('/:id', (request, response) => {
  Article.findByIdAndRemove({ _id: request.params.id })
    .then((article) => response.json(article))
    .catch((err) => response.status(500).json('Error:' + err));
});

module.exports = router;
