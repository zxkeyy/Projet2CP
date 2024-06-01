const express = require("express");
const route = express.Router();
const {
  createMessage,
  getAllUserMessage,
  getAllUserMessageForAdmin,
} = require("../controller/messageController");
const {
  protectedRoute,
  verifyIsAdmin,
} = require("../middelwar/protectedRoute");
route.put("/createMessage", protectedRoute, createMessage);
route.get("/getAllUserMessage", protectedRoute, getAllUserMessage);
route.post(
  "/getAllUserMessageForAdmin",
  protectedRoute,
  verifyIsAdmin,
  getAllUserMessageForAdmin
);
module.exports = route;
