class User {
    socket = undefined;
    name = undefined;
  
    constructor(socket, name) {
        this.socket = socket;
        this.name = name;
    }
  
    setName(name) {
        this.name = name;
    }
    
    removeUser(id) {
        this.list = this.list.filter(u => u.socket.id !== id);
    } 
    
    findUser(id) {
        var user = this.list.filter(u => u.socket.id === id);
        return user[0];
    }
  
  }
  
module.exports = User;