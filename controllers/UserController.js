const User = require('../models/User');
const Validate = require('../modules/validate');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(users.status).json(users.response);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createUser(req, res) {
        try {   
            const {
                name
            } = req.body;
            const data = {
                name: name,
            };
            const val = Validate(data);
            console.log('ass')
            if (val !== true) return res.status(400).json(val);

            const response = await User.create(name);
            res.status(response.status).json(response.response);
            } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteUser(req, res) {
        // código pra deletar usuário
    }

    async updateUser(req, res) {
        // código pra atualizar dados do usuário
    }

    async recoverPassword(req, res) {
        // código para redefinir a senha
    }

    async login(req, res) {
        // código para realizar o login
    }

    async setCharacter(req, res) {
        // código para relacionar um personagem ao usuario
    }

    async updateScore(req, res) {
        //código para atualizar score de algum tipo relacionado ao player
    }

    async updateStatus(req,res) {
        // código para atualizar o status do player online/offline
    }
  }
  
  module.exports = new UserController();