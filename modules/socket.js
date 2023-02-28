let users = []

module.exports = function (io) {
    io.on('connection', (socket) => {
        
        console.log('The user ' + socket.id + ' connected');
    });
};