const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const UserController = require('../controllers/UserController');



router.get('/', HomeController.index);
router.get('/api/createUser', UserController.createUser);

module.exports = router ;
