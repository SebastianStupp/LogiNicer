const router = require('express').Router();
const Storage = require('../models/storages');

router.get('/', (request, response) => {
  Storage.find()
    .then((storages) => response.json(storages))
    .catch((err) => response.json('Error:' + err));
});

router.post('/', (request, response) => {
  const storage = request.body.storage;
  const storageCollection = new Storage({ storage });
  storageCollection
    .save()
    .then((storage) => response.json(storage))
    .catch((err) => response.json('Error:' + err));
});

router.delete('/:id', (request, response) => {
  Storage.findByIdAndRemove({ _id: request.params.id })
    .then((storage) => response.json(storage))
    .catch((err) => response.json('Error:' + err));
});

router.patch('/:id', (request, response) => {
  Storage.findByIdAndUpdate(
    { _id: request.params.id },
    { $set: { storage: request.body.storage } }
  )
    .then((storage) => response.json(storage))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
