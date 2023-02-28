class User {

    users = [];
    socket = undefined;
    name = undefined;
  
    constructor(socket, name) {
        this.socket = socket;
        this.name = name;
    }
  
    setName(name) {
        this.name = name;
    }

    addUser(user) {
        this.list.push(user);
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