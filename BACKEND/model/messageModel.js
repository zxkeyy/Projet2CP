const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  toUserId: mongoose.Schema.Types.ObjectId,
  text: String,
  from_admin: {
    type: Boolean,
  },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
