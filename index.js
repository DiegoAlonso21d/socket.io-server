const express = require("express");

require("dotenv").config();

//App de exrpess
const app = express();

const path = require("path");

const PORT = process.env.PORT;

//Node Server

const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);

require('./sockets/socket')


//Path Publico

const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

server.listen(PORT, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
