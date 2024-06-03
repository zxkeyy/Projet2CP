const express = require("express");
const {protectedRoute} = require("../middelwar/protectedRoute")
const router = express.Router();
const {createCheckSession,stripeWebHook} = require("../controller/payment")

router.post("/create-checkout-session",protectedRoute,createCheckSession)

module.exports = router