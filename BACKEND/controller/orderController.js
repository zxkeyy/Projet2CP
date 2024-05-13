const { User } = require("../model/userModel");
const { Order } = require("../model/orderModel");
//create order
const createOrder = async (req, res) => {
  const { products_id, total_price } = req.body;
  try {
    const user = await User.findOne(req.user._id);
    if (!user) {
      return res.status(400).json("user not found");
    }
    const newOrder = new Order({
      user_id: user._id,
      products_id: products_id,
      total_price: total_price,
    });
    await newOrder.save();
    if (!newOrder) {
      return res.status(500).json("error when we save your order");
    }
    return res.status(201).json(`order created successfully ${newOrder}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server");
  }
};
//get All Order for Admin
const getAllOrder = async (req, res) => {
  try {
    const order = await Order.find();
    if (!order) {
      return res.status(400).json("order not found");
    }
    return res.status(201).json(`${order}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server ");
  }
};
module.exports = { createOrder, getAllOrder };
