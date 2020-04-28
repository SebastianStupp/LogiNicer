const router = require('express').Router();
let Login = require('../models/login');

router.route('/').get((request, response) => {
  Login.find()
    .then((logins) => response.json(logins))
    .catch((err) => response.json('Error:' + err));
});

router.route('/add').post((request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  const newLogin = new Login({ username, password });

  newLogin
    .save()
    .then(() => response.json('New User!'))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
