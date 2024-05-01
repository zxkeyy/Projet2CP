const {
  User,
  userJoiSchema,
  userAuthSchema,
  userForgetPassword,
  userUpdateSchema,
} = require("../model/userModel.js");

const jwt = require("jsonwebtoken");
const sendMail = require("../util/sendMail.js");
const randomatic = require("randomatic");
//register
const register = async (req, res) => {
  const { username, email, password } = req.body;
  const { error } = userJoiSchema.validate({
    username,

    email,
    password,
  });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json("User already exist change your account or go to login page");
    }
    const newUser = {
      username: username,

      email: email,
      password: password,
    };
    const token = jwt.sign(newUser, process.env.ACTIVATE_KEY, {
      expiresIn: "50m",
    });
    try {
      console.log(newUser);
      await sendMail({
        email: newUser.email,
        subject: "activate account",
        text: `http://localhost:3000/user/activateAccount/${token}`,
      });
      return res.status(200).json("check your email");
    } catch (error) {
      console.log(error);
      return res.status(500).json("error when we send email");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server ");
  }
};
//activate the register account
const activateAccount = async (req, res) => {
  const { token } = req.params;
  const newUser = jwt.verify(token, process.env.ACTIVATE_KEY);
  console.log(newUser);
  if (!newUser) {
    return res.status(400).json("invalid token");
  }
  try {
    const userExist = await User.findOne({ email: newUser.email });
    if (userExist) {
      return res.status(400).json("user already exist");
    }
    const user = new User({
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });

    //we don t need to verify if the profile exist because off relation with user

    await user.save();
    if (!user) {
      return res.status(500).json("error when we create user or profile");
    }
    return res
      .status(200)
      .cookie("jwt", user.genToken(), { maxAge: 15 * 24 * 60 * 60 * 1000 })
      .json(
        `user created successfully and this is the information ${user}and this id the information off profile `
      );
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server");
  }
};
//login
const logIn = async (req, res) => {
  const { email, password } = req.body;
  const { error } = userAuthSchema.validate({ email, password });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json("user not found");
    }
    const valid = await user.verifyPassword(password);
    if (!valid) {
      return res.status(400).json("invalid password");
    }
    return res
      .status(201)
      .cookie("jwt", user.genToken(), { maxAge: 15 * 24 * 60 * 60 * 1000 })
      .json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server  ");
  }
};
//forget the password
const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const { error } = userForgetPassword.validate({ email });
  if (error) {
    return res.status(400).json("you email is invalid");
  }
  try {
    let userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json("user not found ");
    }
    const restCode = randomatic("0", 6); //generate a rest code for this user
    const restCodeExpiration = new Date(Date.now() + 5 * 60 * 1000);

    userExist.restCode = restCode.toString();
    userExist.restCodeExpiration = restCodeExpiration;
    userExist = await userExist.save();

    try {
      await sendMail({
        email: userExist.email,
        subject: "activate account",
        text: `${userExist.restCode}`,
      });
      return res.status(200).json("check your email");
    } catch (error) {
      console.log(error);
      return res.status(500).json("error when we send the email");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server ");
  }
};
//activate forget password
const activateForgetPassword = async (req, res) => {
  const { email, restCode } = req.body;
  if (!email || !restCode) {
    return res.status(400).json("you must enter all your information");
  }
  try {
    const user = await User.findOne({ email, restCode });
    if (!user) {
      return res.status(400).json("user not found ");
    }
    if (user.restCodeExpiration < new Date()) {
      return res.status(400).json("this code is expired");
    }
    return res
      .status(200)
      .cookie("jwt", user.genToken(), { maxAge: 15 * 24 * 60 * 60 * 1000 })
      .json(`welcome again ${user}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server ");
  }
};
//logout
const logOut = async (req, res) => {
  try {
    return res.status(200).clearCookie("jwt").json("logout successful ");
  } catch (error) {
    clg(error);
    return res.status(500).json("error from the server");
  }
};
//update user info
const update = async (req, res) => {
  const { username, email, password } = req.body;
  const { error } = userUpdateSchema.validate({ username, email, password });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json("user not found");
    }
    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;
    user = await user.save();
    if (!user) {
      return res.status(400).json("error when we save the new information");
    }
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server");
  }
};
module.exports = {
  register,
  activateAccount,
  logIn,
  forgetPassword,
  activateForgetPassword,
  logOut,
  update,
};
