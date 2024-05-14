const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "you must provide a name"],
    trim: true,
  },

  description: String,

  price: {
    type: Number,
    required: [true, "you must provide a price"],
  },

  category: String,

  qty: Number,

  thumbnail: String,

  gallery: [{ type: String }],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
