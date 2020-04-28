const router = require('express').Router();
let Client = require('../models/client');

router.route('/clients').get((request, response) => {
  Client.find()
    .then((clients) => response.json(clients))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
