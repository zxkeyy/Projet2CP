const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "you must provide a name"],
    trim: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
