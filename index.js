var express = require("express")
var app = express()
var server = require("http").createServer(app)
var router = require("./routes/routes")
var cors = require("cors")
var io = require('socket.io')(server)
require('./socket/IndexSocket')(io)

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/", router);



server.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000")
});