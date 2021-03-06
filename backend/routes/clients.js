const router = require('express').Router();
const Client = require('../models/clients');

router.get('/', (request, response) => {
  Client.find()
    .then((clients) => response.json(clients))
    .catch((err) => response.status(500).json('Error:' + err));
});

router.post('/', (request, response) => {
  const clientname = request.body.clientname;

  const clientCollection = new Client({ clientname });
  clientCollection
    .save()
    .then((clientname) => response.json(clientname))
    .catch((err) => response.status(500).json('Error:' + err));
});

router.delete('/:id', (request, response) => {
  Client.findByIdAndRemove({ _id: request.params.id })
    .then((client) => response.json(client))
    .catch((err) => response.status(500).json('Error:' + err));
});

router.patch('/:id', (request, response) => {
  Client.findByIdAndUpdate(
    { _id: request.params.id },
    { $set: { clientname: request.body.clientname } }
  )
    .then((clientname) => response.json(clientname))
    .catch((err) => response.status(500).json('Error:' + err));
});

module.exports = router;
