// socket.js
const { Server } = require("socket.io");

let onlineUsers = {};

const initSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join", ({ userId }) => {
      onlineUsers[userId] = socket.id;
      console.log("Online users:", onlineUsers);
    });

    socket.on("disconnect", () => {
      for (let userId in onlineUsers) {
        if (onlineUsers[userId] === socket.id) {
          delete onlineUsers[userId];
          break;
        }
      }
      console.log("User disconnected:", socket.id);
      console.log("Online users:", onlineUsers);
    });
  });

  return io;
};

module.exports = { initSocketServer, onlineUsers };
