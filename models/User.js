const knex = require('../database/connection');

class User {
  async create(name) {
    try {
      const user = await knex.insert({
        name: name,
      }).table('user').returning();
      return { response: user[0], status: 200 };
    } catch (error) {
      console.log(error);
      return { response: 'Erro ao cadastrar usuário', status: 404 };
    }
  }

  async findAll() {
    try {
      const user = await knex.select('*').table('user');
      return { response: user[0], status: 200 };
    } catch (error) {
      console.log(error);
      return { response: 'Erro ao cadastrar usuário', status: 404 };
    }
  }
}

module.exports = new User();
