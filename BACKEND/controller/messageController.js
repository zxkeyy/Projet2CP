// controllers/messageController.js
const Message = require("../model/messageModel");
const { onlineUsers } = require("../socket");
const { User } = require("../model/userModel");

const createMessage = async (req, res) => {
  const { text, toUserId, from_admin } = req.body;

  try {
    const message = new Message({
      userId: req.user._id,
      toUserId: toUserId,
      text,
      from_admin,
    });
    await message.save();

    if (onlineUsers[toUserId]) {
      res.io.to(onlineUsers[toUserId]).emit("message", message);
    }

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: "Error creating message" });
  }
};
const getAllUserMessage = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json("user not found");
    }
    const message = await Message.find({
      $or: [{ userId: req.user._id }, { toUserId: req.user._id }],
    });
    return res.status(200).json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server");
  }
};
const getAllUserMessageForAdmin = async (req, res) => {
  const { userId } = req.body;
  try {
    const message = await Message.find({ userId });
    return res.status(200).json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server");
  }
};
const verifyOnlineUser = async (req, res) => {
  const { userId } = req.body;
  if (!onlineUsers[userId]) {
    return res.status(200).json(false);
  }
  return res.status(200).json(true);
};
//get user and admin conversation
const getUserConversationForAdmin = async (req, res) => {
  const { userId } = req.body;
  try {
    const existUser = await User.findById(userId);
    if (!existUser) {
      return res.status(400).json("user not found");
    }
    const message = await Message.find({
      $or: [{ userId: userId }, { toUserId: userId }],
    });
    if (!message) {
      return res.status(200).json("there are no message");
    }
    return res.status(200).json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server");
  }
};
module.exports = {
  createMessage,
  getAllUserMessage,
  getAllUserMessageForAdmin,
  verifyOnlineUser,
  getUserConversationForAdmin,
};
