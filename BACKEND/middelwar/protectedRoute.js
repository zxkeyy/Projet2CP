const { User } = require("../model/userModel");
const jwt = require("jsonwebtoken");
const protectedRoute = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(400).json("Unauthorize");
  }
  const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!verify) {
    return res.status(400).json("Unauthorize");
  }

  try {
    const user = await User.findOne({ _id: verify.token });

    if (!user) {
      return res.status(400).json("user not found when we verify the token ");
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the cookie server");
  }
};
//verify admin
const verifyAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json("user not found ");
    }
    if (user.role !== "admin") {
      return res.status(400).json("you are not the admin");
    }
    console.log(user);
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server ");
  }
};
const verifyIsAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json("user not found");
    }
    if (user.role !== "admin") {
      return res.status(400).json("you are not the admin");
    }
    next();
  } catch (error) {
    console.log("error");
    return res.status(500).json("error from the server ");
  }
};
module.exports = { protectedRoute, verifyIsAdmin };
