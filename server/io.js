const server = require("./index");

const socketIo = require("socket.io");
const io = socketIo(server);

io.on("connection", (socket) => {
  // when a new user connect from client (in browser)
  console.log("a user connected");
  //when a user disconnect (out browser)
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

module.exports = io;
