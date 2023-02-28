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
            return { response: lobbyId, status: 200 };
          } catch (error) {
            console.log(error);
            return { response: 'Erro ao criar lobby', status: 404 };
        }   
    }

    async delete(lobbyId) {
        try {
            await knex.delete('*').table('lobby').where({ id: lobbyId });
            return { response: 'Lobby deletado com sucesso', status: 200 };
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



            return { response: lobbyId, status: 200 };
          } catch (error) {
            console.log(error);
            return { response: 'Erro ao entrar no lobby', status: 404 };
        }
    }

    async exit(userId, lobbyId) {
        try {
            await knex.delete('*').table('user_lobby').where({ userId: userId, lobbyId: lobbyId});

            return { response: 'lobbyId', status: 200 };
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

    async getUsers(lobbyId) {
        try {
            const users = await knex.select('*')
                .from('user_lobby AS ul')
                .leftJoin('user AS u', 'u.id', 'ul.userId')
                .where({ lobbyId: lobbyId })
            if (users.length === 0) return { response: 'Lobby sem usuários', status: 404 };
            return { response: users, status: 200 };
          } catch (error) {
            console.log(error);
            return { response: 'Erro ao resgatar lobby', status: 404 };
        }
    }
}

module.exports = new Lobby();
