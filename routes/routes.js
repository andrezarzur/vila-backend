const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const UserController = require('../controllers/UserController');
const LobbyController = require('../controllers/LobbyController');

router.get('/', HomeController.index);
router.post('/api/createUser', UserController.createUser);
router.get('/api/getAllUsers', UserController.getAllUsers);

router.get('/api/getAllLobbys', LobbyController.getAllLobbys);
router.post('/api/createLobby', LobbyController.createLobby);
router.post('/api/joinLobby', LobbyController.joinLobby);
router.post('/api/deleteLobby', LobbyController.deleteLobby)

module.exports = router;
