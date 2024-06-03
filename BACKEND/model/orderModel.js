const { ref, required } = require("joi");
const mongoose = require("mongoose");
const orderModel = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: {
      type: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, default: 1 },
        },
      ],
      required: true,
    },

    total_price: {
      type: Number,
      required: true,
    },
    payment_status:{
      type: String,
      default:"cash_on_delivery"
    }
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderModel);
module.exports = { Order };
