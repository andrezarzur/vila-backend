const knex = require('../database/connection');
const Characters = require('../models/Characters')

class Match {
    players = [];
    status = '';

    constructor (players, status) {
        this.players = players;
        this.status = status;
    }

    createMatch() {
    }
    
}

module.exports = new Match();
