const router = require('express').Router();
let Client = require('../models/clients');

router.get('/', (request, response) => {
  Client.find()
    .then((clients) => response.json(clients))
    .catch((err) => response.json('Error:' + err));
});

router.delete('/:id', (request, response) => {
  Client.findByIdAndRemove({ _id: request.params.id })
    .then((client) => response.json(client))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
