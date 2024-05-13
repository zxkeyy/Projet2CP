const {
  register,
  activateAccount,
  logIn,
  forgetPassword,
  activateForgetPassword,
  logOut,
  update,
} = require("../controller/userController");
//const protectedRoute = require("../middleware/protectedRoute");
const express = require("express");
const route = express.Router();
route.post("/register", register);

route.get("/activateAccount/:token", activateAccount);
route.post("/logIn", logIn);
route.post("/forgetPassword", forgetPassword);
route.post("/activateForgetPassword", activateForgetPassword);
route.get("/logOut", logOut);
//route.post("/update", protectedRoute, update);
route.post("/update", update);
module.exports = route;
