const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router
    .route('/')
    .get((req, res) => res.send('Hello'));

router
    .route('/register')
    .post(userCtrl.addUser);

router
    .route('/login')
    .post(userCtrl.login);

module.exports = router;