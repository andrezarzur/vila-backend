const Friendship = require('../models/Friendship');

class FriendshipController {
    async getAllFriendships(req, res) {
      try {
        const friendships = await Friendship.findAll();
        res.status(course.status).json(course.response);
      } catch (error) {
        res.status(500).json(error);
      }
    }

    async createFriendship(req, res) {
        // código pra criar novo usuário
    }

    async deleteFriendship(req, res) {
        // código pra deletar usuário
    }
  }
  
  module.exports = new FriendshipController();