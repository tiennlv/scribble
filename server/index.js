const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 1337;
const router = require("./routes/");

const io = socketIo(server);

io.on("connection", (socket) => {
  // when a new user connect from client (in browser)
  console.log("a user connected");
  //when a user disconnect (out browser)
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

app.use("/", router);

server.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});

module.exports = server;
