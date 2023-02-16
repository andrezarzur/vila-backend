class HomeController {
    async index(req, res) {
      res.send('Conectou-se com a API');
    }
  }
  
  module.exports = new HomeController();