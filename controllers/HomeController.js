class HomeController {
    async index(req, res) {
      res.status(200).json('Conectou-se com a API');
    }
  }
module.exports = new HomeController();