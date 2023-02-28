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
            await Lobby.join(lobbyData.userId, lobbyData.lobbyId)

            const users = (await Lobby.getUsers(lobbyData.lobbyId)).response

            io.emit(`update ${lobbyData.lobbyId}`, users);
        })

        socket.on('exitLobby', async (lobbyData) => {
            await Lobby.exit(lobbyData.userId, lobbyData.lobbyId)

            const users = (await Lobby.getUsers(lobbyData.lobbyId)).response

            io.emit(`update ${lobbyData.lobbyId}`, users);
        })
    });
};