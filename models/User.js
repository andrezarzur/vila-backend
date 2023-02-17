const knex = require('../database/connection');

class User {
  async create() {
    try {
      const user = await knex.insert({
        name: 'andre zarzur', email: 'andrezarzur@hotmail.com',
      }).table('user');
      return { response: user[0], status: 200 };
    } catch (error) {
      console.log(error);
      return { response: 'Erro ao cadastrar usuário', status: 404 };
    }
  }
}

module.exports = new User();
