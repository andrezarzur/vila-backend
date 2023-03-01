const User = require('../classes/User')
const Lobby = require('../models/Lobby')
const OnlineUsers = require('../classes/OnlineUsers')


module.exports = function (io) {
    io.on('connection', (socket) => {
        const user = new User(socket.id, 'name');
        OnlineUsers.addUser(user);
        

        socket.on('disconnect', () => {
            OnlineUsers.removeUser(user)

            
        })

        socket.on('joinLobby', async (lobbyData) => {
            const users = (await Lobby.getUsers(lobbyData.lobbyId)).response
            if (!users.some((u) => u.id === lobbyData.userId)) {
                await Lobby.join(lobbyData.userId, lobbyData.lobbyId)
            }
            const users2 = (await Lobby.getUsers(lobbyData.lobbyId)).response
            io.emit(`update ${lobbyData.lobbyId}`, users2);
        })

        socket.on('exitLobby', async (lobbyData) => {
            await Lobby.exit(lobbyData.userId, lobbyData.lobbyId)

            const users = (await Lobby.getUsers(lobbyData.lobbyId)).response

            if (!(users.length === 0)) {
                console.log('entrou')
                io.emit(`update ${lobbyData.lobbyId}`, users);
            }
        })
    });
};