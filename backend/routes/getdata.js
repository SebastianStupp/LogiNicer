const router = require('express').Router();
let Client = require('../models/getData.models');

router.route('/client').get((request, response) => {
  Client.find()
    .then((client) => response.json(client))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
