const Lobby = require('../models/Lobby');
const Validate = require('../modules/validate');

class LobbyController {
    async createLobby(req, res) {
        try {
            const {
                name, capacity, userId
            } = req.body;
            const data = {
                name: name,
                capacity: capacity,
                userId: userId
            };
            const val = Validate(data);
            if (val !== true) return res.status(400).json(val);

            const lobby = await Lobby.create(name, capacity, userId);
            res.status(users.status).json(users.response);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async joinLobby(req, res) {
        try {
            const {
                userId, lobbyId
            } = req.body;
            const data = {
                userId: userId,
                lobbyId: lobbyId,
            };
            const val = Validate(data);
            if (val !== true) return res.status(400).json(val);

            const lobby = await Lobby.join(userId, lobbyId);
            res.status(lobby.status).json(lobby.response);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAllLobbys(req, res) {
        try {
            const lobbys = await Lobby.getAll();
            res.status(lobbys.status).json(lobbys.response);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
  
module.exports = new LobbyController();