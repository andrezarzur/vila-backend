class OnlineUsers {

    users = [];

    constructor() {
    }
  
    addUser(user) {
        this.users.push(user);
    } 

    removeUser(user) {
        this.users.pop(user);
    } 
  }
  
module.exports = new OnlineUsers();