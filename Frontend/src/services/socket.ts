import { io } from "socket.io-client";

const initializeSocket = () => {
  const socket = io("http://localhost:5000"); // Replace with your server URL
  return socket;
};

export default initializeSocket;
