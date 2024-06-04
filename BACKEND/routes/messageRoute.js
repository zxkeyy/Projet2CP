const express = require("express");
const route = express.Router();
const {
  createMessage,
  getAllUserMessage,
  getAllUserMessageForAdmin,
  verifyOnlineUser,
} = require("../controller/messageController");
const {
  protectedRoute,
  verifyIsAdmin,
} = require("../middelwar/protectedRoute");
route.post("/createMessage", protectedRoute, createMessage);
route.get("/getAllUserMessage", protectedRoute, getAllUserMessage);
route.post(
  "/getAllUserMessageForAdmin",
  protectedRoute,
  verifyIsAdmin,
  getAllUserMessageForAdmin
);
route.post("/verifyOnlineUser", protectedRoute, verifyOnlineUser);
module.exports = route;
