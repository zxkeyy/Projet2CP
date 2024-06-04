const express = require("express");

const router = express.Router();
const { createCheckSession, stripeWebHook } = require("../controller/payment");

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  stripeWebHook
);
module.exports = router;
