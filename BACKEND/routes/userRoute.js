const {
  register,
  activateAccount,
  logIn,
  forgetPassword,
  activateForgetPassword,
  logOut,
  update,
  getUserById,
  getAllUser,
} = require("../controller/userController");
const { protectedRoute } = require("../middelwar/protectedRoute");
//const protectedRoute = require("../middleware/protectedRoute");
const express = require("express");
const route = express.Router();
route.post("/register", register);

route.get("/activateAccount/:token", activateAccount);
route.post("/logIn", logIn);

route.post("/forgetPassword", forgetPassword);
route.post("/activateForgetPassword", activateForgetPassword);
route.get("/logOut", logOut);
route.get("/pro", protectedRoute, (req, res) => {
  return res.status(200).json(req.user);
});
route.get("/cookie", (req, res) => {
  console.log(req.cookies);
});
//route.post("/update", protectedRoute, update);
route.get('/getUserById/:id',protectedRoute,getUserById)
route.get('/getAllUsers',protectedRoute,getAllUser)
module.exports = route;
