class User {

    socket = undefined;
    name = undefined;
  
    constructor(socket) {
      this.socket = socket;
    }
  
    setName(name) {
      this.name = name;
    }
  
  }
  
module.exports = User;