const router = require('express').Router();
const Article = require('../models/articles');

router.get('/', (request, response) => {
  Article.find()
    .then((articles) => response.json(articles))
    .catch((err) => response.json('Error:' + err));
});

router.post('/', (request, response) => {
  const articlenumber = request.body.articlenumber;
  const client = request.body.client;
  const bbd = request.body.bbd;
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
    .then((newArticle) => response.json(newArticle))
    .catch((err) => response.json('Error:' + err));
});

router.patch('/:id', (request, response) => {
  Article.findByIdAndUpdate(
    { _id: request.params.id },
    {
      $set: {
        articlenumber: request.body.articlenumber,
        client: request.body.client,
        bbd: request.body.bbd,
        pzn: request.body.pzn,
        ean: request.body.ean,
      },
    },
    { new: true }
  )
    .then((clientname) => response.json(clientname))
    .catch((err) => response.json('Error:' + err));
});

router.delete('/:id', (request, response) => {
  Article.findByIdAndRemove({ _id: request.params.id })
    .then((article) => response.json(article))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
