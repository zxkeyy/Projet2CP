const { createOrder, getAllOrder } = require("../controller/orderController");
const { protectedRoute } = require("../middelwar/protectedRoute");
const express = require("express");
const route = express.Router();
route.post("/createOrder", protectedRoute, createOrder);
route.get("/getAllOrder", protectedRoute, getAllOrder);
module.exports = route;
