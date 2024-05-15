const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      //the password never be unique
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    restCode: {
      type: String,
    },
    restCodeExpiration: {
      type: Date,
    },
  },
  { timestamps: true }
);
userSchema.methods.generateHashPassword = async function () {
  //when we add method is like object method
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(this.password, salt);
};
//compar password when login
userSchema.methods.verifyPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};
userSchema.methods.genToken = function () {
  const token = jwt.sign(
    { token: this._id, profile: this.profile_id },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15d" }
  );
  return token;
};
userSchema.pre("save", async function (next) {
  //this mean the function have a priority before save is happen
  if (this.isModified("password")) {
    this.password = await this.generateHashPassword();
  }
  next();
});
//joi schema
//for register
const userJoiSchema = joi.object({
  username: joi.string().min(4).max(20).required(),

  email: joi.string().min(10).max(25).required().email(),
  password: joi.string().min(6).max(30).required(),
});
//for logIn
const userAuthSchema = joi.object({
  email: joi.string().min(11).max(30).required().email(),
  password: joi.string().min(6).max(30).required(),
});
//for forget password
const userForgetPassword = joi.object({
  email: joi.string().min(11).max(30).required().email(),
});
//for update information
const userUpdateSchema = joi.object({
  username: joi.string().min(4).max(20),
  email: joi.string().min(11).max(30).email(),
  password: joi.string().min(6).max(30),
});
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
  userJoiSchema,
  userAuthSchema,
  userForgetPassword,
  userUpdateSchema,
};
