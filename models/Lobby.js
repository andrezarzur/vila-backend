const knex = require('../database/connection');

class Lobby {
    currentAmount = 0;
    capacity = 0;
    name = 0;

    constructor (currentAmount, capacity, name) {
        this.currentAmount = currentAmount;
        this.capacity = capacity;
        this.name = name;
    }

    async create(name, capacity, userId) {
        try {
            const lobbyId = await knex.insert({
              name: name, capacity: capacity, currentAmount: 1
            }).table('lobby').returning();
            await knex.insert({
                userId: userId,  lobbyId: lobbyId, isLeader: true, isDead: false
            }).table('user_lobby')
            return { response: 'Lobby criado com sucesso', status: 200 };
          } catch (error) {
            console.log(error);
            return { response: 'Erro ao criar lobby', status: 404 };
        }   
    }

    async join(userId, lobbyId) {
        try {
            await knex.insert({
                userId: userId,  lobbyId: lobbyId, isLeader: false, isDead: false
            }).table('user_lobby')
            return { response: 'Entrou com sucesso', status: 200 };
          } catch (error) {
            console.log(error);
            return { response: 'Erro ao entrar no lobby', status: 404 };
        }
    }

    async getAll() {
        try {
            const lobbys = await knex.select('*').table('lobby')
            return { response: lobbys, status: 200 };
          } catch (error) {
            console.log(error);
            return { response: 'Erro ao resgatar lobby', status: 404 };
        }
    }
}

module.exports = new Lobby();
